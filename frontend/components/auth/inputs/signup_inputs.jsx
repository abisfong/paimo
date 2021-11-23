import React from 'react';

export default function SignupInputs(props) {
  return (
    <>
      <label htmlFor="first-name">First Name</label>
      <input id="first-name" type="text" onChange={props.update('first_name')} />
      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" type="text" onChange={props.update('last_name')} />
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={props.update('username')} />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" onChange={props.update('email')} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={props.update('password')} />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input id="confirm-password" type="password" onChange={props.update('confirm_password')} />
      <div className="form-submit-button-container">
        <button>{props.formType}</button>
      </div>
    </>
  )
}