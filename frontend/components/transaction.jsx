import React from 'react';
import TransactionFormContainer from './forms/transaction_form_container';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='transaction'>
        <div className='transaction-container'>
          <p className="title">Paimo | Pay &amp; Request</p>
          <TransactionFormContainer/>
        </div>
      </div>
    );
  }
}