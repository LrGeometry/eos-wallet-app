import React from 'react';
import { LoginContainer } from '../containers';

const Login = ({ handleModalClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Login to EOS</h2>
      <button
        className="js-modal-close"
        onClick={handleModalClose}
      >
        x
      </button>
    </div>
    <div className="modal-body">
      <LoginContainer
        modal
      />
    </div>
  </div>
);

export default Login;
