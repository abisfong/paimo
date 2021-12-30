import React from 'react';
import CloseIcon from '../icons/close_icon';

export default function SearchSelection(props) {
  const onClickHandler = e => {
    const selectionEl = e.currentTarget;
    selectionEl.parentElement.removeChild(selectionEl)
  }
  
  return (
    <div 
      className='search-selection'
      onClick={onClickHandler}
    >
      <span className='name'>{props.name}</span>
      <CloseIcon />
    </div>
  )
}