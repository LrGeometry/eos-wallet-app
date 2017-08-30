import { connect } from 'react-redux';
import { PhoneForm } from '../../components';
import { tryCreatePhone } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(args) {
    dispatch(tryCreatePhone(...args));
  },
});

const PhoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneForm);

export default PhoneContainer;
