import React from 'react';

const Email = () => (
  <form>
    <h2>Next your email</h2>
    <p>Enter your email below.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Email</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
            aria-describedby="username"
            className="form-control form-control-lg prefix"
            id="username"
            name="username"
            required
            type="email"
          />
        </div>
      </div>
    </fieldset>
  </form>
);

export default Email;

