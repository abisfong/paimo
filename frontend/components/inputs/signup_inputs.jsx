import React from 'react';
import Input from './input';
import { 
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../callbacks/form_callbacks';

export default function SignupInputs(props) {
  return (
    <>
      <Input
        id='first-name'
        type='text'
        label="First Name"
        onChange={props.update('first_name', inputEl => {
          handleTextInput(inputEl, 1);
        })}
      />
      <Input
        id='last-name'
        type='text'
        label="Last Name"
        onChange={props.update('last_name', inputEl => {
          handleTextInput(inputEl, 1);
        })}
      />
      <Input
        id='username'
        type='text'
        label="Username"
        onChange={props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
        })}
      />
      <Input
        id='email'
        type='text'
        label="Email"
        onChange={props.update('email', inputEl => {
          handleEmailInput(inputEl, 1);
        })}
      />
      <Input
        id='password'
        type='password'
        label="Password"
        onChange={props.update('password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <Input
        id='confirm-password'
        type='password'
        label="Confirm Password"
        onChange={props.update('confirm_password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className="submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}