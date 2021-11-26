import React from 'react';
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../callbacks/auth_callbacks';

export default function Input(props) {
  const id = props.id;
  const type = props.type;
  const label = props.label;
  const onChange = props.onChange;
  
  return (
    <>
      <div className="auth-input-container">
        <span className={`auth-input-error-text`}></span>
        <input 
          id={id} 
          type={type} 
          onChange={onChange} 
          onBlur={ e => handleValidInputBlur(e.target) }
          onFocus={ e => handleValidInputFocus(e.target.parentElement) }
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}