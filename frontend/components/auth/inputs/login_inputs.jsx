import React from 'react';
import AuthInput from './auth_input';
import { 
  handleEmailOrUsernameInput,
  handleValidInputBlur,
  handleValidInputFocus
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
        onBlur={ e => {
          handleValidInputBlur(e.target.parentElement);
        }}
        onFocus={ e => {
          handleValidInputFocus(e.target.parentElement);
        }}
      />
      <AuthInput 
        id='password'
        type='password'
        label='Password'
        onChange={props.update('password')}
      />
      <div className="session-form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}