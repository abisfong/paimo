import React from 'react';
import LoginInputs from './login_inputs';
import SignupInputs from './signup_inputs';

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
    this.props.history.push('/');
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
          { 
            this.props.formType === 'Login' ? 
            <LoginInputs 
              update={this.update} 
              formType={this.props.formType}
            /> :
            <SignupInputs
              update={this.update}
              formType={this.props.formType}
            />
          }
        </form>
      </>
    );
  }
}