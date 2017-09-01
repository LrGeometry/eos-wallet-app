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
const baseURL = 'proxy-url.com/';

/* TODO use helmet for CSP, HSTS, and XSS protection */
/* app.use(helmet()); */
app.use(cors());
app.use(logger);

const loginParser = bodyParser.json({
  limit: '10kb',
  strict: true,
  type: 'application/json',
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

/*
 * curl -s -X POST \
 * -H "Content-Type: application/json" \
 * -d "{ "username": "useruser", "password": "defnotpassword" }" \
 * http://localhost:4000/api/login
 * * * * * * * * * * * * * * * * * * * * * * */
api.post('/login', loginParser, (req, res) => {
  const {
    username,
    password,
  } = req.body;

  console.log(`Logging in user: ${username}`);

  // db login


  const resp = {
    account: {
      user: null,
    },
  };

  const endResponse = JSON.stringify(resp);

  res.type('json');
  res.send(endResponse);
  res.end();
});


api.get('/account', async (req, res) => {
  const { name } = req.body;

  const url = `${apiUri}/v1/chain/get_account`;

  const account = await fetch(url);


  res.send(JSON.stringify(account));
});

api.post('/transfer', async (req, res) => {
  res.send('');
});

api.get('/transactions', async (req, res) => {
  const {
    to,
    from,
    amount,
    memo
  } = req.body;

  const transactions = await fetch('proxy-url.com/v1/account_history/get_transactions');
  res.send(JSON.stringify(transactions));
});

app.use('/api', api);
app.listen(4000);
