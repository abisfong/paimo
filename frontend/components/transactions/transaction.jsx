import React from 'react';
import TransactionFormContainer from '../forms/transaction_form_container';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='transaction-view'>
        <div className='transaction-container'>
          <TransactionFormContainer/>
        </div>
      </div>
    );
  }
}