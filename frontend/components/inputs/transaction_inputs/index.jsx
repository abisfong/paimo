import React from 'react';
import Search from '../../search';
import AmountInput from './amount_input';
import NoteInput from './note_input';

export default class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.removeTransactionCategory();
  }

  // componentDidUpdate() {
  //   const transactionCategory = this.props.transactionCategory;
  //   const transaction = this.props.formState.transaction;
  //   const currentUser = this.props.currentUser;
  //   const selection = this.props.selection;
  //   if (this.props.transactionCategory) {
  //     transaction.payer_id = transactionCategory === 'payment' ? currentUser.id : selection.id;
  //     transaction.payee_id = transactionCategory === 'request' ? currentUser.id : selection.id;
  //     transaction.complete = transactionCategory === 'payment' ? true : false;
  //     transaction.category = transactionCategory;
  //     transaction.amount *= 100;
  //   }
  // }

  render() {
    const update = this.props.update;
    const setTransactionCategory = this.props.setTransactionCategory;
    const history = this.props.history
    return (
      <>
        <AmountInput update={update}/>
        <Search/>
        <NoteInput update={update}/>
        <div className='form-submit'>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              setTransactionCategory('payment');
            }}
          >
              Pay
          </button>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              setTransactionCategory('request');
            }}
          >
              Request
          </button>
        </div>
      </>
    )
  }
}