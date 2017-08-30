import { connect } from 'react-redux';
import { UsernameForm } from '../../components';
import { tryCreateUsername } from './reducer';

const mapStateToProps = ({ errorMessage }) => ({
  errorMessage,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(args) {
    dispatch(tryCreateUsername(...args));
  },
});

const UsernameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsernameForm);

export default UsernameContainer;
