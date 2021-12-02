import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../../util/api/user_api';
import Input from './input';

export default class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  updateUserDetails(transactionType) {
    const transaction = this.props.state.transaction;
    const transactee = this.props.state.transactee;
    const currentUser = this.props.state.currentUser;

    return () => {
      if (transactionType === 'payment') {
        transaction.payer_id = currentUser.id;
        transaction.payee_id = 2;
      } else {
        transaction.payer_id = 2;
        transaction.payee_id = currentUser.id;
      }
      transactee.id = 2;
      transactee.name = 'Transactee Name';
    }
  }
  
  render() {
    // console.log(this.props.state);
    console.log(this.props.currentUser);
    return (
      <>
        <Input
          id='amount'
          type='text'
          className='amount'
          onChange={this.props.update(['transaction', 'amount'])}
        />
        <Input
          id='to'
          type='text'
          className='to'
          onChange={this.props.update(['transaction', 'to'])}
        />
        <Input
          id='note'
          type='text'
          className='note'
          onChange={this.props.update(['transaction', 'note'])}
        />
        <div className='transaction form-submit'>
          <button>
            <Link 
              to='/account'
              onClick={ this.updateUserDetails('payment') }
            >
              Pay
            </Link>
          </button>
          <button>
            <Link 
              to='/account'
              onClick={ this.updateUserDetails('request') }
            >
              Request
            </Link>
          </button>
        </div>
      </>
    )
  }
}