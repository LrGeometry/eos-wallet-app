import React from 'react';
import { ResetPasswordForm } from '../components';
import { Helmet } from 'react-helmet';

const Permissions = () => (
  <div>
    <Helmet>
      <title>Permissions</title>
    </Helmet>
    <div className="container-full">
      <div className="row">
        <div className="col-12">
          <h2>Permissions</h2>
        </div>
      </div>
      <div className="section">
        <h4>Keystore</h4>

        <div className="keystore">
          <h6>Active</h6>
          <div className="list-item d-lg-flex justify-content-between items-center">
            <div className="d-lg-flex justify-content-between items-center">
              <div>
                <img
                  className="qr-code mr-3 mb-2 mb-lg-0"
                  alt=""
                  src="images/qr_code.png"
                />
              </div>
              <div>
                {/* eslint-disable max-len */}
                <span className="token">IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</span>
                {/* eslint-enable max-len */}
              </div>
            </div>
            <button className="btn btn-primary btn-xsm mt-2 mt-lg-0">Show Private Key</button>
          </div>

          <p>The active key is used to make transfers...</p>
        </div>

        <div className="keystore">
          <h6>Owner</h6>
          <div className="list-item d-lg-flex justify-content-between items-center">
            <div className="d-lg-flex justify-content-between items-center">
              <div>
                <img
                  className="qr-code mr-3 mb-2 mb-lg-0"
                  alt=""
                  src="images/qr_code.png"
                />
              </div>
              <div>
                {/* eslint-disable max-len */}
                <span className="token">IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</span>
                {/* eslint-enable max-len */}
              </div>
            </div>
            <button className="btn btn-primary btn-xsm mt-2 mt-lg-0">Show Private Key</button>
          </div>

          {/* eslint-disable max-len */}
          <p>The owner key is the master key...<br />The private key or password for the owner..</p>
          {/* eslint-enable max-len */}
        </div>
      </div>

      <div className="section">
        <h3>Reset Password</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Permissions;
