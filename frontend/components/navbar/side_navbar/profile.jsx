import React from 'react';
import { Link } from 'react-router-dom'
import createUserInitials from '../../../utils/create_user_initials';

export default class Profile extends React.Component {
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
            <div 
              className='picture'
              style={{backgroundImage: `url(${profileImage})`}}
            >
              {profileImage ? '' : createUserInitials(this.props.currentUser) }
            </div>
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