import React from 'react';
import { Route } from 'react-router';
import {
  EmailForm,
  PhoneForm,
  UsernameForm,
  PasswordForm,
  Progress } from '../components';

const CreateAccount = ({ children }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Create your EOS account</h2>
      <button className="js-modal-close">x</button>
    </div>
    <div className="modal-body">
      <Progress />
      <Route exact path="/create-account" component={UsernameForm} />
      <Route path="/create-account/email" component={EmailForm} />
      <Route path="/create-account/phone" component={PhoneForm} />
      <Route path="/create-account/password" component={PasswordForm} />
    </div>
  </div>
);

export default CreateAccount;
