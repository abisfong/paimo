import React from 'react';

export default function SearchIndexItem(props) {
  const user = this.props.user;
  const selectUser = this.props.selectUser;
  return (
    <li key={user.id} onClick={() => selectUser(user.id)}>
      <img className='profile-picture' src="" alt="" />
      <div className='names'>
        <span className='fullname'>{user.name}</span>
        <span className='username'>@{user.username}</span>
      </div>
    </li>
  );
}