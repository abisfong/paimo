import React from 'react';
import { Link } from 'react-router-dom'

export default class ProfileSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="profile-section">
        <div className="details">
          <Link>
            <img className="picture" src="" alt="" />
          </Link>
        </div>
      </div>
    );
  }
}