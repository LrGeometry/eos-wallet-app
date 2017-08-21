import React from 'react';

const Phone = () => (
  <form>
    <h2>Next your phone</h2>
    <p>Enter your phone below.</p>

    <fieldset className="form-group">
      <label htmlFor="username">Phone number</label>
      <div clasName="input-container">
        <div className="icon" />
        <div className="input-prefix">
          <input
            aria-describedby="phone"
            className="form-control form-control-lg prefix"
            id="phone"
            name="phone"
            required
            type="phone"
          />
        </div>
      </div>
    </fieldset>
  </form>
);

export default Phone;
