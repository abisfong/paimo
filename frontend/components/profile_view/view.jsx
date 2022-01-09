import React from 'react';
import ProfileSection from './profile_section';
import ActivityIndexContainer from '../transactions/activity_index_container';
import getUserTransactions from '../../utils/components/transaction/get_user_transactions';
import getTransactionsBetween from '../../utils/components/transaction/get_transactions_between';

export default class View extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  render() {
    if (!this.props.user) return '';
    
    return (
      <div className='profile-view'>
        <ProfileSection { ...this.props }/>
        <ActivityIndexContainer 
          firstTabContent='All Stories' 
          secondTabContent='Between you'
          firstFilter={(transactions, { matchedUserId }) =>
            getUserTransactions(transactions, matchedUserId)
          }
          secondFilter={(transactions, {currentUserId, matchedUserId}) =>
            getTransactionsBetween(transactions, currentUserId, matchedUserId)
          }
        />
      </div>
    )
  }
}