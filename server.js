global.Promise = require('bluebird');
const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const bodyParser = require('body-parser');
const { User } = require('./db');
const assert = require('assert');

const logger = morgan('combined');
const app = express();
const api = express();
const originServerURL = 'https://eosd.objectcomputing.com/';
const actions = new Map([
  ['/transfer', '/v1/chain/push_transaction'],
  ['/transactions', '/v1/account_history/get_transactions'],
  ['/balance', '/v1/chain/get_info'],
  ['/account', '/v1/chain/get_account'],
  ['/create-account', '/v1/chain/push_transaction'],
]);

const allowedHTTPMethods = new Set([
  'GET',
  'POST',
]);

/* TODO use helmet for CSP, HSTS, and XSS protection */
/* app.use(helmet()); */
app.use(cors());
app.use(logger);
app.use(bodyParser.json());

const fetchFromOriginServer = ({
  method,
  action,
  headers = {
    'Content-Type': 'application/json',
  },
  body }) => {
  assert.fail(
    method,
    allowedHTTPMethods.get(method),
    (!method ? '"method" is undefined.' : `HTTP method "${method}" is not allowed.`),
  );

  assert.fail(
    action,
    actions.get(action),
    (!action ? '"action" is undefined.' : `Action "${action}" does not exist.`),
  );

  const originAction = actions.get(action);
  const options = {
    method,
    headers,
    body,
  };

  return fetch(`${originServerURL}${originAction}`, options);
};

/*
 * /account
 *
 * { name: string }
 *
 * curl -s -X POST \
 * -H "Content-Type: application/json" \
 * -d "{ "username": "useruser", "password": "defnotpassword" }" \
 * http://localhost:4000/api/account
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.get('/account', async (req, res) => {
  const originResponse = await fetchFromOriginServer({
    action: '/account'
  });

  if (originResponse.ok) {
    res.type('json');
    res.send(originResponse.text());
    res.end();
  } else {
    res.send({
      message: 'Error',
      error: '',
    });
  }
});


/*
 * /account/new/
 *
 * { name: string }
 *
 * curl -s -X POST \
 * -H "Content-Type: application/json" \
 * -d "{ "username": "useruser", "password": "defnotpassword" }" \
 * http://localhost:4000/api/account/new
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.post('/account/new', async (req, res) => {
  const originResponse = await fetchFromOriginServer({
    method: 'GET',
  });

  if (originResponse.ok) {
    res.type('json');
    res.send(originResponse.text());
    res.end();
  } else {
    res.send({
      message: 'Error',
      error: '',
    });
  }
});


/*
 * /login
 *
 * { username: string, password }
 *
 * curl -s -X POST \
 * -H "Content-Type: application/json" \
 * -d "{ "account_name": "test" }" \
 * http://localhost:4000/api/login
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.post('/login', async (req, res) => {
  const { account_name, owner_key } = req.body;

  console.log(`attempting login for ${account_name}`)

  try {
    const user = await User.findOne({ account_name }).exec();

    if (!user) {
      throw new Error('User not found');
    }
    
    const validPassword  = await user.passwordIsValid(owner_key);

    if (validPassword) {
      console.log(`-- successful authenitcation for ${account_name}`);
  
      const {
        image_url,
        display_name,
        website,
      } = user;
  
      const clientUserData = {
        image_url,
        display_name,
        website,
      };
  
      res.send(JSON.stringify(clientUserData));
    } else {
      throw new Error('Invalid password')
    }
  } catch (e) {
    res.status(401).json({ 
      message: e.message
    })
  }
});


/*
 * /transactions
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.get('/transactions', async (req, res) => {
  const originResponse = await fetchFromOriginServer({
    method: 'GET',
    action: '/transactions',
    /* TODO */
  });

  /* TODO res.send back to client */
});

/*
 * /transfer
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.post('/transfer', async (req, res) => {
  const {
    to,
    from,
    amount,
    memo
  } = req.body;

  /* TODO eos api here */

  /* TODO res.send back to client */
});

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', api);
app.listen(4000);
