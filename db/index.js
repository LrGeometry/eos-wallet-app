const mongoose = require('mongoose');
const async = require('async');
const bcrypt = require('bcrypt');
/* TODO weird issue with "Promise is not defined in node" */
global.Promise = require('bluebird');

Promise.promisifyAll(bcrypt);

mongoose.connect('mongodb://localhost/eos-wallet');
const db = mongoose.connection;

/* NOTE owner_key and active_key not stored in DB */
const UserSchema = mongoose.Schema({
  account_name: { 
    type: String,
    required: true,
    index:  {
      unique: true,
    }
  },
  auth: {
    encrypted_owner_key: { 
      type: String, 
      required: true,
      minlength: 8,
   },
  },
  image_url: String,
  display_name: String,
  website: String,
  email: { 
    type: String,
    index:  {
      unique: true,
    }
  },
  phone: { 
    type: String,
    index:  {
      unique: true,
    }
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified("auth.encrypted_owner_key")) {
    return next();
  }
  
  try {
    const hash = await bcrypt.hashAsync(this.auth.encrypted_owner_key, 16.5);
    this.auth.encrypted_owner_key = hash;
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.passwordIsValid = function (owner_key) {
  try {
    return bcrypt.compareAsync(owner_key, this.auth.encrypted_owner_key);
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model('User', UserSchema);

User.findOne({ account_name: 'testhaha' })
  .exec()
  .then(user => console.log(user))
  .catch(error => console.error(error))

module.exports = { User };