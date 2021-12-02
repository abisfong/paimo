import React from 'react';
import { Link } from 'react-router-dom';
import Input from './input';

export default class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.state.currentUser;
    this.props.state.currentUser = undefined;
  }

  updateUserDetails(transactionType) {
    const transaction = this.props.state.transaction;
    const transactee = this.props.state.transactee;
    const currentUser = this.currentUser;

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
    console.log(this.props.state);
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
          {/* <Link 
            to='/account'
          > */}
            <button
              onClick={e => {
                this.updateUserDetails('payment')(e);
              }}
            >
                Pay
            </button>
          {/* </Link> */}
          {/* <Link 
            to='/account'
          > */}
            <button onClick={this.updateUserDetails('request')}>
                Request
            </button>
          {/* </Link> */}
        </div>
      </>
    )
  }
}