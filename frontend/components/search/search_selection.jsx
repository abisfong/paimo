import React from 'react';
import CloseIcon from '../icons/close_icon';

export default function SearchSelection(props) {
  const removeSelection = e => {
    const buttonEl = e.currentTarget;
    const selectionEl = buttonEl.parentElement;

    selectionEl.parentElement.removeChild(selectionEl)
    props.removeSelection();
  }
  
  return (
    <div 
      className='search-selection'
    >
      <span className='name'>{props.name}</span>
      <button onClick={removeSelection}>
        <CloseIcon/>
      </button>
    </div>
  )
}