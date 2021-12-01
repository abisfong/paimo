import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from './input';

export default function TransactionInputs(props) {
  const transaction = props.parentState.transaction;
  const transactionee = props.parentState.transactionee;
  return (
    <>
      <Input
        id='amount'
        type='text'
        className='amount'
        onChange={props.update('amount')}
      />
      <Input
        id='to'
        type='text'
        className='to'
        onChange={props.update('to')}
      />
      <Input
        id='note'
        type='text'
        className='note'
        onChange={props.update('note')}
      />
      <div className='transaction form-submit'>
        <button>
          <Link 
            to='/account' 
            onClick={e => { 
              transaction.payer_id = props.currentUser.id;
              transaction.payee_id = 2
              parent
            }}
          >
            Pay
          </Link>
        </button>
        <button>
          <Link 
            to='/account' 
            onClick={ e => {
              transaction.payee_id = props.currentUser.id;
              transaction.payer_id = 2
            }}
          >
            Request
          </Link>
        </button>
      </div>
    </>
  )
}