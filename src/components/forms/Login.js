import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from '../';

const Login = ({
  handleSubmit,
  handleClose,
  modal,
  submitting,
  accountName }) => (
  <form onSubmit={handleSubmit}>
    <p className={`${!modal && 'd-none'}`}>This operation requires your Owner Key.</p>
    <fieldset className="form-group">
      <label htmlFor="account_name">Account Name</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <Field
            aria-describedby="account_name"
            className="form-control form-control-lg prefix"
            id="account_name"
            name="account_name"
            required
            type="text"
            component="input"
            value={accountName}
          />
        </div>
      </div>
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="owner_key">Owner Key</label>
      <Field
        aria-describedby="owner_key"
        className="form-control form-control-lg"
        id="owner_key"
        name="owner_key"
        required
        component="input"
        type="password"
      />
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="keepLoggedIn">Keep me logged in</label>
      <Field
        name="keepLoggedIn"
        component="input"
        type="checkbox"
        className="ml-2"
      />
    </fieldset>

    <div className={`button-group ${modal && 'modal-cta'}`}>
      <div className="row col-12 no-gutters p-0">
        <div className={`col-12 pl-0 ${modal ? 'col-sm-auto pr-sm-2 mb-3' : 'pr-sm-0 mb-1'}`}>
          <button
            className={`btn btn-primary btn-block ${modal ? 'btn-lg' : 'btn-md'}`}
            disabled={submitting}
            type="submit"
          >
          Login
          </button>
        </div>
        <div className={`${modal ? 'col-sm-auto col-12 p2-2 pl-sm-2 pl-0 mb-3' : 'd-none'}`}>
          {modal &&
          <button
            className="btn btn-secondary btn-lg btn-block"
            onClick={handleClose}
          >
            Cancel
          </button>}
        </div>
        <div className={`col-12 ${modal ? 'text-left' : 'text-center'}`}>
          <Link to="/create-account" className="text-link">Don&#39;t have an account?</Link>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'login',
})(Login);
