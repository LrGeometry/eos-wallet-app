const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const validator = require('validator');
  /* TODO import DB */

const logger = morgan('combined');
const app = express();
const api = express();
const baseURL = 'http://104.198.175.158:8888';
const originServer = new Map();

originServer.set('/transfer', '/v1/chain/push_transaction');
originServer.set('/transactions', '/v1/account_history/get_transactions');
originServer.set('/balance', '/v1/chain/get_info');
originServer.set('/account', '/v1/chain/get_account');
originServer.set('/create-account', '/v1/chain/push_transaction');


/* TODO use helmet for CSP, HSTS, and XSS protection */
/* app.use(helmet()); */
app.use(cors());
app.use(logger);

app.use(bodyParser.urlencoded({
  extended: true,
}));


const fetchFromOriginServer = ({
  method,
  action,
  headers = {
    'Content-Type': 'application/json',
  },
  body }) => {
  const originAction = originServer.get(action);
  const options = {
    method,
    headers,
    body,
  };

  return fetch(`${baseURL}${originAction}`, options);
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


const newAccountParser = bodyParser.json({
  limit: '10kb',
  strict: true,
  verify: (req, res) => {}
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
api.get('/account/new', newAccountParser, async (req, res) => {
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


const loginParser = bodyParser.json({
  limit: '10kb',
  strict: true,
  verify: (req, res) => {
    const { username, password } = req.body;
    const usernameParams = {
      min: 3,
      max: 40,
    };
    const passwordParams = {
      min: 3,
      max: 40,
    };

    console.log(req.body);
    console.log(username);

    if (validator.isEmpty(username)) {
      res.send({
        message: 'No username',
        error: '',
      });
    }

    if (validator.isEmpty(password)) {
      res.send({
        message: 'No password',
        error: '',
      });
    }

    if (validator.isLength(username, usernameParams)) {
      res.send({
        message: 'Username too short',
        error: '',
      });
    }

    if (validator.isLength(password, passwordParams)) {
      res.send({
        message: 'Password too short',
        error: '',
      });
    }
  }
});

api.get('/stub/login', (req, res) => {
  const stub = {
    user: {
      name: 'Display Name',
      url: 'www.website.com',
      status: 'None',
      icon: '/iamges/male_2.png',
    },
  };

  res.send(JSON.stringify(stub));
});

/*
 * /login
 *
 * { username: string,
 *   password: string }
 *
 * curl -s -X POST \
 * -H "Content-Type: application/json" \
 * -d "{ "username": "useruser", "password": "defnotpassword" }" \
 * http://localhost:4000/api/login
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.post('/login', loginParser, async (req, res) => {
  const { username, password } = req.body;
  // call db
  // this simulates the async nature of the request from the database, stub data is located at the
  // location
  const data = await fetch('/stub/login');
  // throw if not successful
  // proceed if successful
  res.send(data)
});

/*
 * /transactions
 *
 * * * * * * * * * * * * * * * * * * * * * * */
api.get('/transactions', async (req, res) => {
  const X = await fetchFromOriginServer({
    method: 'GET',
  })

  const transactions = await fetch('proxy-url.com/v1/account_history/get_transactions');
  res.send(JSON.stringify(transactions));
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

  const f = await fetch(`${baseURL}/v1/`)
});

app.use('/api', api);
app.listen(4000);
