import React from 'react';
import CloseIcon from '../icons/close_icon';
import ErrorIcon from '../icons/error_icon';

export default function Toast(props) {
  const type = props.type;
  const closeAction = props.closeAction;
  return (
    <div className={'toast ' + type}>
      <div className='content'>
        <div className='header'>
          { type === 'error' ? <ErrorIcon/> : '' }
          <h3 className='title'>{type}</h3>
        </div>
        <span className='body'>
          { props.children }
        </span>
      </div>
      <button onClick={closeAction}>
        <CloseIcon/> 
      </button>
    </div>
  );
}