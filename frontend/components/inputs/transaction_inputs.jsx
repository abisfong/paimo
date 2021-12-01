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
              props.state.payer_id = props.currentUser.id;
              props.state.payee_id = 2
            }}
          >
            Pay
          </Link>
        </button>
        <button>
          <Link 
            to='/account' 
            onClick={ e => {
              props.state.payee_id = props.currentUser.id;
              props.state.payer_id = 2
            }}
          >
            Request
          </Link>
        </button>
      </div>
    </>
  )
}