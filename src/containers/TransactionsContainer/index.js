import { connect } from 'react-redux';
import { List, Transaction as renderItem } from '../../components';

/* TODO review if logic makes sense here */
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

const mapStateToProps = state => ({
  data: mapNormalizeDate(state.transactions.recents),
  renderItem,
});

const TransactionsContainer = connect(
  mapStateToProps,
)(List);

export default TransactionsContainer;
