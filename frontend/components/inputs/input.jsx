import React from 'react';

export default function Input(props) {
  const id = props.id;
  const label = props.label;
  const className = props.className;
  const filteredProps = {
    id: props.id, 
    type: props.type, 
    onChange: props.onChange, 
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    placeholder: props.placeholder
  }

  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        { 
          props.type === 'textarea' ?
            <textarea {...filteredProps}/> :
            <input {...filteredProps}/>
        }
        <span className='input-error-text'></span>
      </div>
    </>
  );
}