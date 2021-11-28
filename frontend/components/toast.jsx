import React from 'react';

export default function Toast(props) {
  return (
    <div className={'toast ' + props.type}>
      {props.type === 'error' ? <i class='fas fa-exclamation error-icon'></i> : '' }
      <span>
        {props.children}
      </span>
    </div>
  );
}