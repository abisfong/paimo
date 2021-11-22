import React from 'react';
import LoginForm from './login_form';
import SignupForm from './signup_form';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
        { 
          this.props.formType === 'Login' ? 
          <LoginForm 
            handleSubmit={this.handleSubmit} 
            update={this.update} 
            formType={this.props.formType}
          /> :
          <SignupForm
            handleSubmit={this.handleSubmit}
            update={this.update}
            formType={this.props.formType}
          />
        }
      </>
    );
  }
}