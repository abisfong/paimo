import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem(props) {
  return (
    <Link { ...props }>
      <li className='account-view-link'>
        { props.children }
      </li>
    </Link>
  )
}