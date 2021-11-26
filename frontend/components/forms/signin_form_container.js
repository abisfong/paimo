import { connect } from 'react-redux';
import { signin } from '../../actions/auth_actions';
import Form from './form';
import SigninInputs from '../inputs/signin_inputs'

const mapStateToProps = (state) => {
  return {
    user: {
      username: '',
      password: ''
    },
    formType: 'Sign in',
    inputs: SigninInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);