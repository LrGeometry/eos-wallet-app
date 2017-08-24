import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Faq extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>FAQs</title>
        </Helmet>
        <div className="container-full">
          <div>
            <div>
              <h2>FAQs</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              Content
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
