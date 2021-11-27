import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className='menu'>
        <li className='account-view-link'></li>
      </ul>
    );
  }
}