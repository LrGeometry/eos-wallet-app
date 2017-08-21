import React from 'react';

const Password = () => (
  <form>
    <h2>Choose a password</h2>

    <fieldset className="form-group">
      <label htmlFor="username">Password</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
            aria-describedby="password"
            className="form-control form-control-lg prefix"
            id="password"
            name="password"
            required
            type="password"
          />
        </div>
      </div>
    </fieldset>
  </form>
);

export default Password;

