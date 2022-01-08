import React from 'react';
import ProfileImage from "./profile_image";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    
    return (
      <div className='profile'>
        <ProfileImage />
        <span>{user.name}</span>
      </div>
    )
  }
}