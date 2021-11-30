import React from 'react';
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const name = this.props.currentUser.name;
    const username = this.props.currentUser.username;
    const amount = this.props.currentUser.amount;

    return (
      <div className='profile-section'>
        <div className='me'>
          <Link to='/me'>
            <img className='picture' src='' alt='' />
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