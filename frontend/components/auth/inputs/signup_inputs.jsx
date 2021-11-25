import React from 'react';
import AuthInput from './auth_input';
import { 
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../../callbacks/auth_callbacks';

export default function SignupInputs(props) {
  return (
    <>
      <AuthInput
        id='first-name'
        type='text'
        label="First Name"
        onChange={e => {
          handleTextInput(e.target, 1);
          props.update('first_name');
        }}
      />
      <AuthInput
        id='last-name'
        type='text'
        label="Last Name"
        onChange={e => {
          handleTextInput(e.target, 1);
          props.update('last_name');
        }}
      />
      <AuthInput
        id='username'
        type='text'
        label="Username"
        onChange={e => {
          handleTextInput(e.target, 3);
          props.update('username');
        }}
      />
      <AuthInput
        id='email'
        type='text'
        label="Email"
        onChange={e => {
          handleEmailInput(e.target);
          props.update('email');
        }}
      />
      <AuthInput
        id='password'
        type='password'
        label="Password"
        onChange={e => {
          handlePasswordInput(e.target);
          props.update('password');
        }}
      />
      <AuthInput
        id='confirm-password'
        type='password'
        label="Confirm Password"
        onChange={e => {
          handlePasswordInput(e.target);
          props.update('confirm_password');
        }}
      />
      <div className="session-form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}