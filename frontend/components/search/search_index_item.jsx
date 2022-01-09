import React from 'react';
import ProfileImage from '../profile_view/profile_image';

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