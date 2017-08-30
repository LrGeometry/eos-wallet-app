import React from 'react';
import { renderRoutes } from 'react-router-config';
import subRoutes from './subroutes';
import { Progress } from '../components';

const CreateAccount = ({ handleModalClose }) => (
  <div className="login">
    <div className="login-header modal-header">
      <h2>Create your EOS account</h2>
      <button
        className="js-modal-close"
        onClick={handleModalClose}
      >
        x
      </button>
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

      {renderRoutes(subRoutes[0].routes)}
    </div>
  </div>
);

export default CreateAccount;
