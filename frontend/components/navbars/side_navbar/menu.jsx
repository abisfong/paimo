import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className='menu'>
        <a onClick={ e => this.props.logout() }>
          <li className='account-view-link'>
            <i class="fas fa-power-off"></i> Log out
          </li>
        </a>
      </ul>
    );
  }
}