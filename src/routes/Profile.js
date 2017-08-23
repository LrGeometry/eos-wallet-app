import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Transactions,
} from '../containers';

import {
  Balance,
} from '../components';

class Profile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title> {/* TODO: Show name of user here instead */}
        </Helmet>
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h2>Display Name</h2>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col-12 col-lg-8 d-flex flex-row about">
                <div className="profile-pic" />
                <div className="profile-meta mt-2 ml-4">
                  <div className="username">username</div>
                  <div className="location">Location</div>
                  <div className="website">website</div>
                  <div className="bio mt-1">Wild-man, Gardener, Encourager, Homesteader, Lyricist, Deep Thinker, Papa, Humorist, Husband
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 mt-lg-0 mt-4">
                <div className="module snapshot text-lg-right text-left">
                  <Balance />
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-flex justify-content-between items-center">
            <div>
              <h3>Transaction History</h3>
            </div>
            <div className="items-center mb-2 mb-md-0">
              <div className="module-search">
                <input
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
