import React from 'react';
import ErrorIcon from '../icons/error_icon';

const SuccessIcon = <svg 
  className="type-icon" 
  focusable="false" 
  viewBox="0 0 20 20" 
  role="img"
>
  <rect 
    width="20" 
    height="20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
  </rect>
  <path d="M5.54871 17.6569C4.76766 16.8758 4.76766 15.6095 5.54871 14.8284L16.5442 3.83292C17.3253 3.05187 18.5916 3.05187 19.3726 3.83292C20.1537 4.61397 20.1537 5.8803 19.3727 6.66134L8.37714 17.6569C7.59609 18.4379 6.32976 18.4379 5.54871 17.6569Z"></path><path d="M8.40397 17.6569C7.62292 18.4379 6.35659 18.4379 5.57554 17.6569L0.625795 12.7071C-0.155254 11.9261 -0.155254 10.6597 0.625795 9.87868C1.40684 9.09763 2.67317 9.09763 3.45422 9.87868L8.40397 14.8284C9.18502 15.6095 9.18502 16.8758 8.40397 17.6569Z">
  </path>
  <title>CheckMark</title>
</svg>

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
        { CloseIcon }  
      </button>
    </div>
  );
}