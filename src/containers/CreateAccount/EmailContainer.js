import { connect } from 'react-redux';
import { EmailForm } from '../../components';
import { tryCreateEmail } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(args) {
    dispatch(tryCreateEmail(...args));
  },
});

const EmailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailForm);

export default EmailContainer;
