import React from 'react';
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';
import createTimestamp from '../../utils/components/transaction/create_timestamp';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  createMessage() {
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

  render() {
    const transaction = this.props.transaction;
    const transactor = this.props.transactor;
    const timestamp = createTimestamp(new Date(), new Date(transaction.created_at))
    return (
      <div className='transaction'>
        <img className='profile-picture' src="" alt="" />
        <div className='content'>
          <header className='header'>
            <span className='message'>
              { this.createMessage() }
            </span>
            <span className={
              `amount ${transaction.payer_id === transactor.id ? 'negative' : ''}` 
            }>
              { transaction.payer_id === transactor.id  ? '- ' : '+ ' }
              ${ (transaction.amount / 100).toFixed(2) }
            </span>
          </header>
          <span className='date'>
            { timestamp }
            <i className='privacy-icon'></i>
          </span>
          <span className='note'>{transaction.note}</span>
          <div className='action-buttons'>
            <HeartIcon/>
            <CommentIcon/>
          </div>
        </div>
      </div>
    );
  }
}