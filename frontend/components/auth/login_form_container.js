import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import LoginInputs from './inputs/login_inputs'

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: ''
    },
    formType: 'Sign in',
    inputs: LoginInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);