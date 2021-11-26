import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';
import SignupInputs from '../inputs/signup_inputs';
import Form from './form';

const mapStateToProps = (state) => {
  return {
    user: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: ''
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);