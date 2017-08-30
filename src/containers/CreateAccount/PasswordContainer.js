import { connect } from 'react-redux';
import { PasswordForm } from '../../components';
import { tryCreatePassword } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(args) {
    dispatch(tryCreatePassword(...args));
  },
});

const PasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordForm);

export default PasswordContainer;
