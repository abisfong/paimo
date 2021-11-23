import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupInputs from './inputs/signup_inputs';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    user: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    },
    formType: 'Sign up',
    inputs: SignupInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);