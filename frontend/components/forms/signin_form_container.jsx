import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions/auth_actions';
import Form from './form';
import SigninInputsContainer from '../inputs/signin_inputs_container'

const mapStateToProps = () => {
  return {
    payload: {
      username: '',
      password: ''
    },
    inputs: SigninInputsContainer,
    formHeader: <h3 className='auth form-header'>{'Sign into Paimo'}</h3>,
    formFooter: (
      <div className='auth form-footer'>
        <Link className='signup-link' to='/signup'>
          Sign Up
        </Link>
      </div>
    ),
    buttonLabel: 'Sign In',
    className: 'auth form'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: formInput => dispatch(signin(formInput))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);