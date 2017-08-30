import { connect } from 'react-redux';
import Balance from '../../components/Balance';
import { refreshBalance } from './reducer';

const mapStateToProps = ({ balance: { account } }) => ({
  account,
});

const mapDispatchToProps = dispatch => ({
  refresh: () => {
    dispatch(refreshBalance());
  },
});

const BalanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Balance);

export default BalanceContainer;
