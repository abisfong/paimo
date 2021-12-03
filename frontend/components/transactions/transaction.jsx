import React from 'react';
import { connect } from 'react-redux';
import {
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
    const minutesElapsed = minutesBetweenDates(new Date(), transactionDate);
    const hoursElapsed = hoursBetweenDates(new Date(), transactionDate);
    const daysElapsed = daysBetweenDates(new Date(), transactionDate);
    const userId = parseInt(this.props.userId);
    const users = this.props.users;
    const payMessage = (
      <> paid <strong>{ users[transaction.payee_id].name }</strong></>
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
            { minutesElapsed < 24 && minutesElapsed > 0 ? minutesElapsed : '' }
            { hoursElapsed < 24 && hoursElapsed > 0 ? hoursElapsed : '' }
            { daysElapsed <= 15 && daysElapsed > 0 ? daysElapsed : ''}
          </span>
          <i className='privacy-icon'></i>
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