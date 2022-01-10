import React from 'react';
import { Link } from 'react-router-dom';
import createTimestamp from '../../utils/create_timestamp';
import ProfileImage from '../profile_view/profile_image';

export default class TransactionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  completeTransactionMessage() {
    const { currentUser, transaction, transactor, transactee } = this.props;
    const firstUser = transaction.category === 'payment' ?
      transaction.payer_id === transactor.id ?
        transactor : transactee :
      transaction.payer_id === transactor.id ?
        transactee : transactor
    const secondUser = firstUser.id === transactor.id ? transactee : transactor;

    return (
      <>
        <Link to={`/account/u/${firstUser.id}`}>
          <strong> 
            { firstUser.id === currentUser.id ? 'You' : firstUser.name } 
          </strong>
        </Link>
        {transaction.category === 'payment' ? ' paid ' : ' charged '}
        <Link to={`/account/u/${secondUser.id}`}>
          <strong>
            { secondUser.id === currentUser.id ? 'You' : secondUser.name } 
          </strong>
        </Link>
      </>
    )
  }

  incompleteTransactionMessage() {
    const { transaction, transactor, transactee } = this.props;
    return (
      <>
        Request 
        { transaction.payer_id === transactor.id ? ' from ' : ' to ' }
        <Link to={`/account/u/${transactee.id}`}>
          <strong>
            { transactee.name }
          </strong>
        </Link>
      </>
    )
  }

  amount() {
    const transaction = this.props.transaction;
    const transactor = this.props.currentUser;
    
    if (!transaction.amount) return ''
    
    return (
      <span className={
        `amount 
              ${transaction.payer_id === transactor.id ? 'negative' : ''}
              ${transaction.complete ? '' : 'incomplete'}`
      }>
        {
          transaction.complete ?
            transaction.payer_id === transactor.id ?
              '- ' : '+ '
            : ''
        }
        ${(transaction.amount / 100).toFixed(2)}
      </span>
    )
  }

  render() {
    const { actionButtons, transaction, transactor, transactee } = this.props;
    const timestamp = createTimestamp(new Date(), new Date(transaction.created_at))
    return (
      <div className='transaction'>
        <ProfileImage user={
          transaction.payer_id === transactee.id ? transactee : transactor
        }/>
        <div className='content'>
          <header className='header'>
            <span className='message'>
              {
                transaction.complete ?
                  this.completeTransactionMessage() :
                  this.incompleteTransactionMessage()
              }
            </span>
            { this.amount() }
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