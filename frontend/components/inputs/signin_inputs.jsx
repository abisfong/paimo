import React from 'react';
import Input from './input';
import {
  handleTextInput,
  handleEmailInput,
  handlePasswordInput
} from '../../util/callbacks/auth_form';

export default function SigninInputs(props) {
  return (
    <>
      <Input 
        id='emailOrUsername'
        className="auth input"
        type='text'
        label='Email or Username'
        onChange={ props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
          if (inputEl.value.includes('@')) 
            handleEmailInput(inputEl);
        })}
      />
      <Input 
        id='password'
        className="auth input"
        type='password'
        label='Password'
        onChange={props.update('password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className='auth form-submit'>
        <button 
          className='demo-button'
          onClick={e => {
            e.preventDefault();
            props.submitForm({username: 'demo', password: 'password'})
          }}
        >
          Demo
        </button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}