import { connect } from 'react-redux';
import { ResetPasswordForm } from '../../components';
import { tryCreateNewPassword } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  tryCreateNewPassword(args) {
    dispatch(tryCreateNewPassword(...args));
  },
});

const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordForm);

export default ResetPasswordContainer;
