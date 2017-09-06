const mongoose = require('mongoose');
const async = require('async');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open world!')
});

mongoose.connect('mongodb://localhost/eos-wallet');

/* owner_key and active_key not stored in DB */

const UserSchema = mongoose.Schema({
  account_name: String,
  image_url: String,
  display_name: String,
  email: String,
  phone: String,
});

const User = mongoose.model('User', UserModel);
