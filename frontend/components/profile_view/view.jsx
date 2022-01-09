import React from 'react';
import ProfileSection from './profile_section';
import ActivityIndexContainer from '../transactions/activity_index_container';
import getUserTransactions from '../../utils/components/transaction/get_user_transactions';

export default class View extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='profile-view'>
        <ProfileSection { ...this.props }/>
        <ActivityIndexContainer 
          firstTabContent='All Stories' 
          secondTabContent='Between you'
          firstFilter={transactions => transactions}
          secondFilter={getUserTransactions}
        />
      </div>
    )
  }
}