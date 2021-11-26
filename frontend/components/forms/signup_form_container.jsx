import React from 'react';
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
    formHeader: <h3 className="form-header">{'Signup to Paimo'}</h3>,
    formType: 'Sign Up',
    inputs: SignupInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);