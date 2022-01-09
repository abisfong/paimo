import React from 'react';
import { Link } from 'react-router-dom'
import ProfileImage from '../../profile_view/profile_image';

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {    
    const currentUser = this.props.currentUser;

    return (
      <div className='profile-section'>
        <div className='me'>
          <Link to='/me'>
            <ProfileImage user={currentUser}/>
          </Link>
          <div className='names'>
            <h3 className='fullname'>
              Hi, {currentUser.name.split(' ')[0]}
            </h3>
            <Link
              className='username account-view-link'
              to={`/account/u/${currentUser.id}`}
            >
                <span>@</span>{currentUser.username}
            </Link>
          </div>
        </div>
        <div className='balance'>
          <p>${currentUser.amount/100} in Paimo</p>
        </div>
      </div>
    );
  }
}