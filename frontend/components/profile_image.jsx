import React from 'react';

export default class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='profile-image'
        style={{ backgroundImage: `url(${user.profileImage})` }}
      >
        {user.profile_image ? '' : createUserInitials(user)}
      </div>
    )
  }
}