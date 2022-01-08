import React from 'react';
import createUserInitials from '../../utils/create_user_initials';

export default class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    
    return (
      <div
        className='profile-image'
        style={user.profileImage && { backgroundImage: `url(${user.profileImage})` }}
      >
        {user.image ? '' : createUserInitials(user)}
      </div>
    )
  }
}