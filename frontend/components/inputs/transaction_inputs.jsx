import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from './input';

export default function TransactionInputs(props) {
  return (
    <>
      <Input
        id='amount'
        type='text'
        className='amount'
        onChange={props.update(['transaction', 'amount'])}
      />
      <Input
        id='to'
        type='text'
        className='to'
        onChange={props.update(['transaction', 'to'])}
      />
      <Input
        id='note'
        type='text'
        className='note'
        onChange={props.update(['transaction', 'note'])}
      />
      <div className='transaction form-submit'>
        <button>
          <Link 
            to='/account' 
          >
            Pay
          </Link>
        </button>
        <button>
          <Link 
            to='/account' 
          >
            Request
          </Link>
        </button>
      </div>
    </>
  )
}