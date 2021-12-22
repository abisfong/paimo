import React from 'react';
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';
import createTimestamp from '../../utils/components/transaction/create_timestamp';

export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transaction = this.props.transaction;
    const timestamp = createTimestamp(new Date(), new Date(transaction.created_at))
    const userId = parseInt(this.props.userId);
    const users = this.props.users;
    // grab the other user here to be able to print message
    return (
      <div className='transaction'>
        <img className='profile-picture' src="" alt="" />
        <div className='content'>
          <header className='header'>
            <span className='message'>
              <strong> You </strong>
              { transaction.category === '' ? payMessage : chargeMessage }
            </span>
            <span className={
              `amount ${transaction.payer_id === userId ? 'negative' : ''}` 
            }>
              { transaction.payer_id === userId ? '- ' : '+ ' }
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