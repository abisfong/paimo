import React from 'react';
import { connect } from 'react-redux';
import CommentIcon from '../icons/comment_icon';
import HeartIcon from '../icons/heart_icon';
import {
  secondsBetweenDates,
  minutesBetweenDates,
  hoursBetweenDates,
  daysBetweenDates
} from '../../util/dates';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transaction = this.props.transaction;
    const transactionDate = new Date(transaction.created_at);
    const secondsElapsed = secondsBetweenDates(new Date(), transactionDate);
    const minutesElapsed = minutesBetweenDates(new Date(), transactionDate);
    const hoursElapsed = hoursBetweenDates(new Date(), transactionDate);
    const daysElapsed = daysBetweenDates(new Date(), transactionDate);
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
            { secondsElapsed < 60 ? ( secondsElapsed === 0 ? 1 : secondsElapsed ) + 's' : '' }
            { minutesElapsed < 60 && minutesElapsed > 0 ? minutesElapsed + 'm' : '' }
            { hoursElapsed < 24 && hoursElapsed > 0 ? hoursElapsed + 'h' : '' }
            { daysElapsed <= 15 && daysElapsed > 0 ?  daysElapsed + 'd' : '' }
            {
              daysElapsed > 15 ? 
                transactionDate.toLocaleString('default', { month: 'short' }) +
                ' ' +
                transactionDate.getDay() :
                ''
            }
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