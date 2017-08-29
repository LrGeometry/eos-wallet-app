import React from 'react';

const Balance = ({ account }) => (
  <div className="account-info logged-in p-4">
    <div className="nav-primary">{account.value.name} EOS</div>
    <div className="balance">{account.formattedBalance}</div>
    <div className="change">{account.priceUpdate}</div>
  </div>
);

export default Balance;
