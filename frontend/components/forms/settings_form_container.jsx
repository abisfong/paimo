import React from 'react';
import { connect } from 'react-redux';
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
    formHeader: <h3 className="settings form-header">Settings</h3>,
    buttonLabel: 'Update',
    className: 'settings form',
    inputsRequired: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formInput => dispatch('#############')
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);