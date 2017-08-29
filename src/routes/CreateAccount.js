import React from 'react';
import { Route } from 'react-router';
import {
  EmailContainer,
  PhoneContainer,
  UsernameContainer,
  PasswordContainer, } from '../containers/CreateAccount';
import { Progress } from '../components';

const CreateAccount = () => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Create your EOS account</h2>
      <button className="js-modal-close">x</button>
    </div>
    <div className="modal-body">
      <div className="login-progress">
        <ul className="d-flex justify-content-between items-center col-12 mb-4">
          <li className="col-0 active" />
          <li className="col-4 active" />
          <li className="col-4" />
          <li className="col-4" />
        </ul>
      </div>
      <Progress />
      <Route exact path="/create-account" component={UsernameContainer} />
      <Route path="/create-account/email" component={EmailContainer} />
      <Route path="/create-account/phone" component={PhoneContainer} />
      <Route path="/create-account/password" component={PasswordContainer} />
    </div>
  </div>
);

export default CreateAccount;
