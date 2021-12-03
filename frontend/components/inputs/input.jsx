import React from 'react';

export default function Input(props) {
  const id = props.id;
  const type = props.type;
  const label = props.label;
  const className = props.className;
  const onChange = props.onChange;
  const onBlur = props.onBlur;
  const onFocus = props.onFocus;
  const placeholder = props.placeholder;
  
  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input 
          id={id} 
          type={type} 
          onChange={onChange} 
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        <span className='input-error-text'></span>
      </div>
    </>
  );
}