import React from 'react';
import { connect } from 'react-redux';
import {
  secondsBetweenDates,
  minutesBetweenDates,
  hoursBetweenDates,
  daysBetweenDates
} from '../../util/dates';

const heartIcon = (
  <svg 
    className='heartIcon'
    focusable="false" 
    viewBox="0 0 20 20" 
    role="img"
  >
    <path d="M10 5.6c.4-1.8 2.2-3.2 4.2-3 2.4 0 4.8 1.7 4.6 5.5-.3 4.2-7.2 11-8.7 11C8.7 19 1.7 12 1.5 8c-.4-3.8 2-5.5 4.4-5.5 2 0 3.8 1.3 4.2 3"></path>
    <title>Heart</title>
  </svg>
);

const commentIcon = (
  <svg 
    className='comment-icon'
    focusable="false" 
    viewBox="0 0 20 20" 
    role="img"
  >
    <path d="M1.64734 18.6936C1.12648 18.8773 0.555368 18.6039 0.371725 18.083C0.271843 17.7998 0.304596 17.4866 0.460929 17.2301L2.48431 13.9103C1.24035 12.6083 0.499995 10.9742 0.499995 9.2C0.499995 4.94741 4.75329 1.5 10 1.5C15.2467 1.5 19.5 4.94741 19.5 9.2C19.5 13.4526 15.2467 16.9 10 16.9C9.13446 16.9 8.29597 16.8062 7.49914 16.6304L1.64734 18.6936Z"></path>
    <title>Comment</title>
  </svg>
);

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
      <> <strong>You</strong> paid <strong>{ users[transaction.payee_id].name }</strong></>
    );
    const chargeMessage = (
      <> charged <strong>{ users[transaction.payer_id].name }</strong> </>
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
            { heartIcon }
            { commentIcon }
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