import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className='menu'>
        <a>
          <li className='account-view-link'>
            <i class="fas fa-power-off"></i> Log Out
          </li>
        </a>
      </ul>
    );
  }
}