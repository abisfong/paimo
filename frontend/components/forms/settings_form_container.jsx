import React from 'react';
import { connect } from 'react-redux';
import SignupInputs from '../inputs/signup_inputs';
import Form from './form';

const mapStateToProps = ({auth}) => {
  const currentUser = auth.currentUser;
  const firstName = currentUser.name.split(' ')[0];
  const secondName = currentUser.name.split(' ')[1];
  return {
    payload: {
      first_name: firstName,
      last_name: secondName,
      username: currentUser.username,
      email: currentUser.email,
      password: '',
      confirm_password: ''
    },
    inputs: SignupInputs,
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