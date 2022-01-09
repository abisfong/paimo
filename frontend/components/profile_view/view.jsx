import React from 'react';
import ProfileSection from './profile_section';
import ActivityIndexContainer from '../transactions/activity_index_container';

export default class View extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='profile-view'>
        <ProfileSection { ...this.props }/>
        <ActivityIndexContainer firstTabName='test' secondTabName='test2'/>
      </div>
    )
  }
}