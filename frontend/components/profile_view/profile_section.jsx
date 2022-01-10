import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from "./profile_image";

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;

    if (!user) return '';
    
    return (
      <div className='profile-section'>
        <ProfileImage user={user}/>
        <span className='name'>{user.name}</span>
        <div>
          <span className='username'>
            @{user.username}
          </span>
          {/* <span className='dot'>•</span>
          <span className='friends'>
            {user.friendCount} friends
          </span> */}
        </div>
        <div className='action-buttons'>
          {
            currentUser.id !== user.id ?
              <>
                <Link
                  className='account-view-link transaction-link'
                  to='/account/transaction'
                  onClick={() => this.props.selectUser(user)}
                >
                  Pay or Request
                </Link>
                {/* <button
                  className='
                    account-view-link 
                    base-action-white-link 
                    profile-view-link
                    add-friend-link
                  '
                >
                  Add Friend
                </button> */}
              </> :
              <Link
                className='edit base-action-white-link profile-view-link'
                to='/account/settings'
              >
                Edit
              </Link>
          }
        </div>
      </div>
    )
  }
}