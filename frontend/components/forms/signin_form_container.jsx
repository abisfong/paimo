import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions/auth_actions';
import Form from './form';
import SigninInputs from '../inputs/signin_inputs'

const mapStateToProps = () => {
  return {
    user: {
      username: '',
      password: ''
    },
    inputs: SigninInputs,
    formHeader: <h3 className='header'>{'Sign into Paimo'}</h3>,
    formFooter: (
      <div className='footer'>
        <Link className='signup-link' to='/signup'>
          Sign Up
        </Link>
      </div>
    ),
    formType: 'Sign In',
    className: 'auth-form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);