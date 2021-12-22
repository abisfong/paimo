import React from 'react';
import { connect } from 'react-redux';
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';
import createTimestamp from '../../util/create_timestamp';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transaction = this.props.transaction;
    const timestamp = createTimestamp(new Date(), new Date(transaction.created_at))
    const userId = parseInt(this.props.userId);
    const users = this.props.users;
    const payMessage = (
      <>paid <strong>{ users[transaction.payee_id].name }</strong></>
    );
    const chargeMessage = (
      <>charged <strong>{ users[transaction.payer_id].name }</strong></>
    );
    return (
      <div className='transaction'>
        <img className='profile-picture' src="" alt="" />
        <div className='content'>
          <header className='header'>
            <span className='message'>
              <strong> You </strong>
              { transaction.payer_id === userId ? payMessage : chargeMessage }
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

const mapStateToProps = ({ entities }) => {
  return {
    users: entities.users
  }
}

export default connect(mapStateToProps)(Transaction);