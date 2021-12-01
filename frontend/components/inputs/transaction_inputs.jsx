import React from 'react';
import TransactionInput from './transaction_input';

export default function TransactionInputs(props) {
  return (
    <>
      <TransactionInput
        id='amount'
        type='text'
        label='Email or Username'
        onChange={props.update('username', inputEl => {
          handleTextInput(inputEl, 3);
          if (inputEl.value.includes('@'))
            handleEmailInput(inputEl);
        })}
      />
      <TransactionInput
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