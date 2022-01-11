import React from 'react';
import { connect } from 'react-redux';
import SignupInputsContainer from '../inputs/signup_inputs_container';
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
    inputs: SignupInputsContainer,
    formHeader: <h3 className="settings form-header">Settings</h3>,
    buttonLabel: 'Update',
    className: 'settings form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formInput => dispatch('#############')
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);