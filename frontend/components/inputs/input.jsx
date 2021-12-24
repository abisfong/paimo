import React from 'react';

export default function Input(props) {
  const id = props.id;
  const label = props.label;
  const className = props.className;

  return (
    <>
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        { 
          props.type === 'textarea' ?
            <textarea {...props}/> :
            <input {...props}/>
        }
        <span className='input-error-text'></span>
      </div>
    </>
  );
}