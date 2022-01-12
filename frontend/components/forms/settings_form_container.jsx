import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import SignupInputs from '../inputs/signup_inputs';
import Form from './form';

const mapStateToProps = ({auth}) => {
  const currentUser = auth.currentUser;
  const firstName = currentUser.name.split(' ')[0];
  const secondName = currentUser.name.split(' ')[1];

  return {
    payload: {
      id: currentUser.id,
      first_name: firstName,
      last_name: secondName,
      username: currentUser.username,
      email: currentUser.email,
    },
    inputs: SignupInputs,
    formInnerHeader: <h3 className="form-header">Settings</h3>,
    buttonLabel: 'Update',
    className: 'settings-form'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm: formInput => {
      ownProps.history.push('/account');
      return dispatch(updateUser(formInput))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);