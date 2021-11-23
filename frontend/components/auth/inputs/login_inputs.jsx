import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginInputs(props) {
  return (
    <>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={props.update('username')} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={props.update('password')} />
      <div className="form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}