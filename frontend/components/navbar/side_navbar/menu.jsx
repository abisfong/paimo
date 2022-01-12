import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menu_item';
import IncompleteIcon from '../../icons/incomplete_icon';
import StatementsIcon from '../../icons/statements_icon';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul className='menu'>
        <MenuItem to='/account/search'>
            <i className="fas fa-search"></i> Search
        </MenuItem>
        <MenuItem to='/account/incomplete'>
            <IncompleteIcon/>
            Incomplete
        </MenuItem>
        {/* <MenuItem to='/account/statements'>
            <StatementsIcon/>
            Statements
        </MenuItem> */}
        <MenuItem to='/account/settings'>
          <i className="fas fa-cog"></i> Settings
        </MenuItem>
        <MenuItem 
          to='#'
          onClick={e => this.props.logout()}
        >
            <i className="fas fa-power-off"></i> Log out
        </MenuItem>
      </ul>
    );
  }
}