import React from 'react';
import CloseIcon from '../icons/close_icon';

export default function SearchSelection(props) {
  return (
    <div className='search-selection'>
      <span className='name'>{props.name}</span>
      <CloseIcon />
    </div>
  )
}