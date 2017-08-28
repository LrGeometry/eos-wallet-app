import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Username = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <h2>Select an Account Name</h2>
    <p>Your account name is how you will be known on EOS.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Account Name</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <Field
            aria-describedby="username"
            className="form-control form-control-lg prefix"
            id="username"
            name="username"
            required
            type="text"
          />
        </div>
      </div>
    </fieldset>
    <div className="modal-cta">
      <div className="row col-12 no-gutters p-0">
        <div className="col-sm-auto col-12 pl-0 pr-sm-2 pr-0 mb-sm-0 mb-3">
          <button
            disabled={submitting}
            className="btn btn-primary btn-lg btn-block"
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'username',
})(Username);

