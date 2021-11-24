import React from 'react';
import AuthInput from './auth_input';

export default function LoginInputs(props) {
  return (
    <>
      <AuthInput 
        id='emailOrUsername'
        type='text'
        label="Email or Username"
        onChange={props.update('username')}
      />
      <AuthInput 
        id='password'
        type='password'
        label='Password'
        onChange={props.update('password')}
      />
      <div className="form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}