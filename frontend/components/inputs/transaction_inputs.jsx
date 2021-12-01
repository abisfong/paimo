import React from 'react';
import Input from './input';

export default function TransactionInputs(props) {
  return (
    <>
      <Input
        id='amount'
        type='text'
        label='Email or Username'
        onChange={props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
          if (inputEl.value.includes('@'))
            handleEmailInput(inputEl);
        })}
      />
      <Input
        id='to'
        type='text'
        label='to'
        onChange={props.update('password', inputEl => {
          handlePasswordInput(inputEl);
        })}
      />
      <div className='transaction form-submit'>
        <button>Pay</button>
        <button>Request</button>
      </div>
    </>
  )
}