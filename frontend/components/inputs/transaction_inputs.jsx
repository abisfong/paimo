import React from 'react';
import Input from './input';

export default function TransactionInputs(props) {
  return (
    <>
      <Input
        id='emailOrUsername'
        type='text'
        label='Email or Username'
        onChange={props.update('username', inputEl => {
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
      <div className='submit-button-container'>
        <button
          className='demo-button'
          onClick={e => {
            props.setState({
              username: 'demo',
              password: 'password'
            }, () => { document.querySelector('.form').submit() })
          }}
        >
          Demo
        </button>
        <button>Pay</button>
        <button>Request</button>
      </div>
    </>
  )
}