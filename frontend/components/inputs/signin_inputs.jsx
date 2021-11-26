import React from 'react';
import Input from './input';
import {
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../callbacks/auth_callbacks';

export default function SigninInputs(props) {
  return (
    <>
      <Input 
        id='emailOrUsername'
        type='text'
        label="Email or Username"
        onChange={ props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
          if (inputEl.value.includes('@')) 
            handleEmailInput(inputEl);
        })}
      />
      <Input 
        id='password'
        type='password'
        label='Password'
        onChange={props.update('password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className="auth-form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}