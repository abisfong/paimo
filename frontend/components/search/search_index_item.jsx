import React from 'react';
import createUserInitials from '../../utils/create_user_initials';
import ProfileImage from '../profile/profile_image';

export default function SearchIndexItem(props) {
  const user = props.user;
  const selectUser = props.selectUser;
  
  return (
    <li onClick={() => selectUser(user.id)}>
      <ProfileImage user={user}/>
      <div className='names'>
        <span className='fullname'>{user.name}</span>
        <span className='username'>@{user.username}</span>
      </div>
    </li>
  );
}