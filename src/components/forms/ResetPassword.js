import React, { Component } from 'react';
// import validation
// import mutation

class ResetPassword extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input
            aria-describedby="accountName"
            className="form-control form-control-lg"
            name="currentPassword"
            required
            type="text"
          />
        </fieldset>

        <fieldset className="form-group">
          <small className="form-text text-muted"><a>Recover Account</a></small>
          <label htmlFor="currentPassword">Current password</label>
          <input
            aria-describedby="currentPassword"
            className="form-control form-control-lg"
            name="newPassword"
            required
            type="text"
          />
        </fieldset>
      
        <div className="row col-12 no-gutters p-0 mb-3">
          <div className="col-sm-auto col-12 pl-0 pr-0">
           <button
             className="btn btn-secondary btn-lg btn-block"
             type="submit"
           >Regenerate Password
           </button>
          </div>
        </div>
      
        <fieldset className="form-group">
          <label htmlFor="regeneratedPassword">Re-Generated password</label>
          <input
            aria-describedby="regeneratedPassword"
            className="form-control form-control-lg"
            name="newPassword"
            required
            type="text"
          />
        </fieldset>
      
        <div className="row col-12 no-gutters p-0">
          <div className="col-sm-auto col-12 pl-0 pr-0">
           <button
             className="btn btn-primary btn-lg btn-block"
             type="submit"
           >Update Password
           </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ResetPassword;
