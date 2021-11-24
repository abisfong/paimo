import React from 'react';

export default function AuthInput(props) {
  const id = props.id;
  const type = props.type;
  const label = props.label;
  const onChange = props.onChange;
  
  return (
    <>
      <div className="auth-input-container">
        <span className={`auth-input-error-text`}></span>
        <input id={id} type={type} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}