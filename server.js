const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const apiUri = 'proxy-url.com/';

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.type('html');
  res.send(`
    <style>
      body { margin: 0; font-family: sans-serif; }
    </style>
    <h1>Login</h1>
    <form action="/login" method="post">
      <input placeholder="Username" name="username" type="text" />
      <input placeholder="Password" name="password" type="password" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/login', urlEncodedParser, (req, res) => {
  console.log(JSON.stringify(req.body));

  res.type('html');
  res.send(`
    <style>
      body { margin: 0; font-family: sans-serif; }
    </style>
    <h1>Welcome ${req.body.username}</h1>
  `)
});


app.get('/account', async (req, res) => {
  const url = `${apiUri}/v1/chain/get_account`;

  console.log(`fetching account details from ${url}`);

  const account = await fetch(url);
  res.send(JSON.stringify(account));
});

app.post('/transfer', async (req, res) => {
  res.send('');
});

app.get('/transactions', async (req, res) => {
  const transactions = await fetch('proxy-url.com/v1/account_history/get_transactions');
  res.send(JSON.stringify(transactions));
});


app.listen(4000, () => console.log('yay'))
