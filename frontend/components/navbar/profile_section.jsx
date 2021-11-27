import React from 'react';
import { Link } from 'react-router-dom'

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="profile-section">
        <div className="me">
          <Link to='/me'>
            <img className="picture" src="" alt="" />
          </Link>
          <div className="names">
            <h3 className="fullname">Hi, Abraham</h3>
          </div>
        </div>
      </div>
    );
  }
}