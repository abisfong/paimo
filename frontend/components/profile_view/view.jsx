import React from 'react';
import ProfileSection from './profile_section';

export default class View extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='profile-view'>
        <ProfileSection { ...this.props }/>
      </div>
    )
  }
}