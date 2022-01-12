import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menu_item';

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
            <i>
              <svg focusable="false" viewBox="0 0 20 20" role="img">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M10 0C15.5228 0 20 4.47715 20 10C20 15.4292 15.6733 19.8479 10.2799 19.9962L10 20C4.57076 20 0.152068 15.6733 0.0038418 10.2799L0 10C0 4.47715 4.47715 0 10 0ZM10 3C6.13401 3 3 6.13401 3 10H17C17 6.13401 13.866 3 10 3Z"
                  />
              </svg> 
            </i>
            Incomplete
        </MenuItem>
        {/* <MenuItem to='/account/statements'>
            <i>
              <svg focusable="false" viewBox="0 0 20 20" role="img">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7004 0C17.3733 0 17.9183 0.526471 17.9183 1.17647V18.8235C17.9183 19.4735 17.3733 20 16.7004 20H3.30295C2.63003 20 2.085 19.4735 2.085 18.8235V1.17647C2.085 0.526471 2.63003 0 3.30295 0H16.7004ZM11.7654 12.5401H5.085V15.0401H11.7654V12.5401ZM15.085 7.79012H5.085V10.2901H15.085V7.79012ZM13.585 3.04012H5.085V5.54012H13.585V3.04012Z"
                />
              </svg> 
            </i>
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