import React, { Component } from 'react';
// import validation
// import mutation

class SearchForm extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <input
            aria-describedby="search"
            className="form-control form-control-lg"
            name="search"
            required
            type="text"
          />
        </fieldset>
      </form>
    );
  }
}

export default SearchForm;
