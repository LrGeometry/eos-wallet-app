import React from 'react';

const Username = () => (
  <form>
    <h2>Select an Account Name</h2>
    <p>Your account name is how you will be known on EOS.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Account Name</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
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
  </form>
);

export default Username;

