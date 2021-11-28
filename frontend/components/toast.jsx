import React from 'react';

export default function Toast(props) {
  const ErrorIcon = <svg 
    className='type-icon' 
    focusable="false" 
    viewBox="0 0 20 20" 
    role="img"
  >
    <path d="M10.0373 0C8.35577 0 7.04947 1.46478 7.24118 3.1353L8.27941 12.1824C8.38192 13.0756 9.1381 13.75 10.0373 13.75C10.9364 13.75 11.6926 13.0756 11.7951 12.1824L12.8333 3.1353C13.025 1.46478 11.7187 0 10.0373 0Z">
    </path>
    <path d="M12 18C12 19.1046 11.1046 20 10 20C8.89546 20 8.00003 19.1046 8.00003 18C8.00003 16.8954 8.89546 16 10 16C11.1046 16 12 16.8954 12 18Z">
    </path>
  </svg>

  const CloseIcon = <svg
    className='close-icon'
    focusable="false"
    viewBox="0 0 20 20"
    role="img">
    <g clipPath="url(#clip0)"
  >
      <path d="M0.949037 16.2225C0.167988 17.0036 0.167988 18.2699 0.949037 19.051C1.73009 19.832 2.99642 19.832 3.77747 19.051L10 12.8284L16.2225 19.051C17.0036 19.832 18.2699 19.832 19.051 19.051C19.832 18.2699 19.832 17.0036 19.051 16.2225L12.8284 10L19.051 3.77746C19.832 2.99641 19.832 1.73008 19.051 0.949029C18.2699 0.16798 17.0036 0.167982 16.2225 0.94903L10 7.17157L3.77746 0.94903C2.99642 0.167982 1.73009 0.167982 0.949037 0.94903C0.167988 1.73008 0.167989 2.99641 0.949038 3.77746L7.17158 10L0.949037 16.2225Z">
      </path>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white">
        </rect>
      </clipPath>
    </defs>
  </svg>

  return (
    <div className={'toast ' + props.type}>
      {props.type === 'error' ? ErrorIcon : '' }
      <div className='content'>
        <h3 className='title'>{props.type}</h3>
        <span className='message'>
          {props.children}
        </span>
      </div>
      { CloseIcon }  
    </div>
  );
}