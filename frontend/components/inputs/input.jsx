import React from 'react';
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../callbacks/form_callbacks';

export default function Input(props) {
  const id = props.id;
  const type = props.type;
  const label = props.label;
  const onChange = props.onChange;
  
  return (
    <>
      <div className="input-container">
        <span className={`input-error-text`}></span>
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