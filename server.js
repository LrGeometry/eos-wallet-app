const express = require('express');
const morgan = require('morgan');
// const helmet = require('helmet');
const bodyParser = require('body-parser');
const validator = require('validator');
  /* TODO import DB */

const logger = morgan('combined');
const app = express();
const api = express();
const baseURL = 'proxy-url.com/';

/* TODO use helmet for CSP, HSTS, and XSS protection */
/* app.use(helmet()); */
app.use(logger);

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.type('html');
  res.send(`
    <style>
      body { margin: 0; font-family: sans-serif; }
    </style>
    <h1>Login</h1>
    <form action="/api/login" method="post">
      <input placeholder="Username" name="username" type="text" />
      <input placeholder="Password" name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  `);
});

api.post('/login', urlEncodedParser, (req, res) => {
  const {
    username,
    password,
  } = req.body;

  // db login


  const resp = {
    account: {
      user: null,
    },
  };

  const endResponse = JSON.stringify(resp);

  res.type('json');
  res.send(endResponse);
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

app.listen(4000, () => console.log('yay'))
