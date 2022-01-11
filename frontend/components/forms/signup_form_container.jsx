import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';
import SignupInputs from '../inputs/signup_inputs';
import Form from './form';

const mapStateToProps = () => {
  return {
    payload: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    },
    inputs: SignupInputs,
    formHeader: <h3 className="auth form-header">Signup to Paimo</h3>,
    buttonLabel: 'Sign Up',
    className: 'auth form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formInput => dispatch(signup(formInput))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);