import React from 'react';
import {
  handleValidInputBlur,
  handleValidInputFocus
} from '../../util/auth_form_callbacks';

export default function Input(props) {
  const id = props.id;
  const type = props.type;
  const label = props.label;
  const onChange = props.onChange;
  
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input 
          id={id} 
          type={type} 
          onChange={onChange} 
          onBlur={ e => handleValidInputBlur(e.target) }
          onFocus={ e => handleValidInputFocus(e.target.parentElement) }
        />
        <span className='input-error-text'></span>
      </div>
    </>
  );
}