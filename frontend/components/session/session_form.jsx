import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={this.update('username')}/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onchange={this.update('password')}/>
          <button>Login</button>
        </form>
      </>
    );
  }
}