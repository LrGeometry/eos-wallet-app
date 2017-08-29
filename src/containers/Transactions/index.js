import React from 'react';
import { connect } from 'react-redux';
import { List, Icon } from '../../components';

const mapNormalizeDate = data => data.map(({ date: dateText, ...transaction }) => {
  const date = new Date(dateText);
  return {
    ...transaction,
    date: {
      month: date.toLocaleString('en-US', { month: 'long' }).substr(0, 3),
      day: date.getDay(),
    },
  };
});

const Transaction = ({ date, sender, memo, amount }) => (
  <div className="transaction d-flex flex-row">
    <div className="transaction-meta d-flex flex-row items-center">
      <div className="transaction-date">
        <div className="date-month">{date.month}</div>
        <div className="date-day">{date.day}</div>
      </div>

      <Icon
        className="transaction-thumbnail ml-3 hidden-md-down"
        url={sender.icon}
      />

      <div className="transaction-data ml-3">
        <p className="transaction-sender mb-1"><a>{sender.name}</a></p>
        <p className="transaction-memo mb-0">{memo}</p>
      </div>
    </div>

    <div className="transaction-amount-container d-flex flex-row-reverse items-center">
      <Icon className="transaction-icon icon-eos_icons_transfer_to down" />
      <p className="transaction-amount">{amount}</p>
    </div>
  </div>
);

const Transactions = ({ data }) => (
   <List
     data={data}
     renderItem={Transaction}
   />
);

const mapStateToProps = state => ({
  data: mapNormalizeDate(state.transactions.recents),
});

export default connect(
  mapStateToProps,
)(Transactions);
