import React from 'react';
import createUserInitials from '../../utils/create_user_initials';

export default function SearchIndexItem(props) {
  const user = props.user;
  const selectUser = props.selectUser;
  
  return (
    <li onClick={() => selectUser(user.id)}>
      <div 
        className='profile-image'
        style={{ backgroundImage: `url(${user.profileImage})` }}
      >
        { user.profile_image ? '' : createUserInitials(user) }
      </div>
      <div className='names'>
        <span className='fullname'>{user.name}</span>
        <span className='username'>@{user.username}</span>
      </div>
    </li>
  );
}