import React from 'react';

export default function SearchIndexItem(props) {
  const user = props.user;
  const selectUser = props.selectUser;
  return (
    <li onClick={() => selectUser(user.id)}>
      <img className='profile-picture' src="" alt="" />
      <div className='names'>
        <span className='fullname'>{user.name}</span>
        <span className='username'>@{user.username}</span>
      </div>
    </li>
  );
}