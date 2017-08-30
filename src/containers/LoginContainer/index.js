import { connect } from 'react-redux';
import { LoginForm } from '../../components';
import { tryLogin } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (credentials) => {
    dispatch(tryLogin(credentials));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginContainer;
