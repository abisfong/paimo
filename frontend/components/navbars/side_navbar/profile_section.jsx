import React from 'react';
import { Link } from 'react-router-dom'

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const name = this.props.currentUser.name;
    const username = this.props.currentUser.username;
    return (
      <div className="profile-section">
        <div className="me">
          <Link to='/me'>
            <img className="picture" src="" alt="" />
          </Link>
          <div className="names">
            <h3 className="fullname">Hi, {name}</h3>
            <Link 
              className="username account-view-link"
              to='/me'
            >
                <span>@</span>{username}
            </Link>
          </div>
        </div>
        <div className="balance">
          <p>$42.25 in Piamo</p>
        </div>
      </div>
    );
  }
}