import React from 'react';

export default function LoginForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={props.update('username')} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onchange={props.update('password')} />
        <button>Login</button>
      </form>
    </>
  )
}