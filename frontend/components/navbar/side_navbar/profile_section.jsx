import React from 'react';
import { Link } from 'react-router-dom'
import ProfileImage from '../../profile/profile_image';

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {    
    const amount = this.props.currentUser.amount;
    const name = this.props.currentUser.name;
    const username = this.props.currentUser.username;
    const profileImage = this.props.currentUser.profileImage;

    return (
      <div className='profile-section'>
        <div className='me'>
          <Link to='/me'>
            <ProfileImage user={this.props.currentUser}/>
          </Link>
          <div className='names'>
            <h3 className='fullname'>
              Hi, {name.split(' ')[0]}
            </h3>
            <Link 
              className='username account-view-link'
              to='/me'
            >
                <span>@</span>{username}
            </Link>
          </div>
        </div>
        <div className='balance'>
          <p>${amount/100} in Paimo</p>
        </div>
      </div>
    );
  }
}