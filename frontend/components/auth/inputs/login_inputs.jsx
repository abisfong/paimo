import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginInputs(props) {
  return (
    <>
      <div className="input-container">
        <input id="emailOrUsername" type="text" onChange={props.update('username')} />
        <label htmlFor="emailOrUsername">Email or Username</label>
      </div>
      <div className="input-container">
        <input id="password" type="password" onChange={props.update('password')} />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-submit-button-container">
        <button className="demo-button">Demo</button>
        <button>{props.formType}</button>
      </div>
    </>
  )
}