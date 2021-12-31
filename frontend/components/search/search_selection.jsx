import React from 'react';
import CloseIcon from '../icons/close_icon';

export default function SearchSelection(props) {
  const removeSelection = e => {
    const closeEl = e.currentTarget;
    const selectionEl = closeEl.parentElement;

    selectionEl.parentElement.removeChild(selectionEl)
  }
  
  return (
    <div 
      className='search-selection'
    >
      <span className='name'>{props.name}</span>
      <CloseIcon onClick={removeSelection}/>
    </div>
  )
}