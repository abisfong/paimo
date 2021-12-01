import React from 'react';
import AuthInput from './auth_input';
import { 
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../util/auth_form_callbacks';

export default function SignupInputs(props) {
  return (
    <>
      <AuthInput
        id='first-name'
        type='text'
        label="First Name"
        onChange={props.update('first_name', inputEl => {
          handleTextInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='last-name'
        type='text'
        label="Last Name"
        onChange={props.update('last_name', inputEl => {
          handleTextInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='username'
        type='text'
        label="Username"
        onChange={props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
        })}
      />
      <AuthInput
        id='email'
        type='text'
        label="Email"
        onChange={props.update('email', inputEl => {
          handleEmailInput(inputEl, 1);
        })}
      />
      <AuthInput
        id='password'
        type='password'
        label="Password"
        onChange={props.update('password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <AuthInput
        id='confirm-password'
        type='password'
        label="Confirm Password"
        onChange={props.update('confirm_password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className="submit-button-container">
        <button>{props.formType}</button>
      </div>
    </>
  )
}