import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from "./profile_image";

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  render() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;

    if (!user) return '';
    
    return (
      <div className='profile'>
        <ProfileImage user={user}/>
        <span>{user.name}</span>
        <div className='username-friends'>
          <span className='username'>
            {user.username}
          </span>
          <span className='friends'>
            {user.friendCount} friends
          </span>
        </div>
        {
          currentUser.id !== user.id ?
            <>
              <Link
                className='account-view-link transaction-link'
                to='/account/transaction'
              >
                Pay or Request
              </Link>
              <button
                className='account-view-link add-friend-link'
              >
                Add Friend
              </button>
            </> :
            <Link
              className='edit'
              to='/account/settings'
            >
              Edit
            </Link>
        }
      </div>
    )
  }
}