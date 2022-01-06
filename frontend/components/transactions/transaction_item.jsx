import React from 'react';
import createTimestamp from '../../utils/components/transaction/create_timestamp';

export default class TransactionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  completeTransactionMessage() {
    const transaction = this.props.transaction;
    const transactor = this.props.transactor;
    const transactee = this.props.transactee;
    return (
      <>
        <strong> 
          { 
            transaction.category === 'payment' ?
              transaction.payer_id === transactor.id ?
                'You' : transactee.name :
              transaction.payer_id === transactor.id ?
                transactee.name : 'You'
          } 
        </strong>
        {transaction.category === 'payment' ? ' paid ' : ' charged '}
        <strong>
          {
            transaction.category === 'payment' ?
              transaction.payer_id !== transactor.id ?
                'You' : transactee.name :
              transaction.payer_id !== transactor.id ?
                transactee.name : 'You'
          }
        </strong>
      </>
    )
  }

  incompleteTransactionMessage() {
    const transaction = this.props.transaction;
    const transactor = this.props.transactor;
    const transactee = this.props.transactee;
    return (
      <>
        Request 
        { transaction.payer_id === transactor.id ? ' from ' : ' to ' }
        <strong>
          { transactee.name }
        </strong>
      </>
    )
  }

  render() {
    const actionButtons = this.props.actionButtons;
    const transaction = this.props.transaction;
    const transactor = this.props.transactor;
    const timestamp = createTimestamp(new Date(), new Date(transaction.created_at))
    return (
      <div className='transaction'>
        <div className='profile-image' />
        <div className='content'>
          <header className='header'>
            <span className='message'>
              {
                transaction.complete ?
                  this.completeTransactionMessage() :
                  this.incompleteTransactionMessage()
              }
            </span>
            <span className={
              `amount 
              ${transaction.payer_id === transactor.id ? 'negative' : ''}
              ${transaction.complete ? '' : 'incomplete'}` 
            }>
              { 
                transaction.complete ?
                  transaction.payer_id === transactor.id  ? 
                    '- ' : '+ '
                  : ''
              }
              ${ (transaction.amount / 100).toFixed(2) }
            </span>
          </header>
          <span className='date'>
            { timestamp }
            <i className='privacy-icon'></i>
          </span>
          <span className='note'>{transaction.note}</span>
          <div className='action-buttons'>
            { actionButtons }
          </div>
        </div>
      </div>
    );
  }
}