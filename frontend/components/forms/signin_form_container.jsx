import React from 'react';
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
    formHeader: <h3 className='form-header'>Sign into Paimo</h3>,
    formFooter: (
      <div className="form-footer">
        <Link className='signup-link' to="/signup" {...props}>
          Sign Up
        </Link>
      </div>
    ),
    inputs: SigninInputs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);