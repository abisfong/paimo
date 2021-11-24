import React from 'react';
import AuthInput from './auth_input';
import { 
  handleEmailOrUsernameInput, handlePasswordInput
} from '../../../callbacks/session_form_callbacks';

export default function LoginInputs(props) {
  return (
    <>
      <AuthInput 
        id='emailOrUsername'
        type='text'
        label="Email or Username"
        onChange={ e => { 
          handleEmailOrUsernameInput(e.target);
          props.update('username');
        }}
      />
      <AuthInput 
        id='password'
        type='password'
        label='Password'
        onChange={e => {
          handlePasswordInput(e.target);
          props.update('password');
        }}
      />
      <div className="session-form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}