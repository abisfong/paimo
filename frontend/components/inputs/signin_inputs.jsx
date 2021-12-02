import React from 'react';
import AuthInput from './auth_input';
import { connect } from 'react-redux';
import {
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../util/callbacks/auth_form';
import { signin } from '../../actions/auth_actions';

const SigninInputs = (props) => {
  return (
    <>
      <AuthInput 
        id='emailOrUsername'
        className="auth input"
        type='text'
        label='Email or Username'
        onChange={ props.update(['username'], inputEl => {
          handleTextInput(inputEl, 3);
          if (inputEl.value.includes('@')) 
            handleEmailInput(inputEl);
        })}
      />
      <AuthInput 
        id='password'
        className="auth input"
        type='password'
        label='Password'
        onChange={props.update(['password'], inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className='auth form-submit'>
        <button 
          className='demo-button'
          onClick={e => {
            e.preventDefault();
            props.signin({username: 'demo', password: 'password'})
          }}
        >
          Demo
        </button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user))
});

export default connect(null, mapDispatchToProps)(SigninInputs);