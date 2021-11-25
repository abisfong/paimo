import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class AuthForm extends React.Component {
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

  update(field, cb) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
      cb(e.target);
    }
  }

  render() {
    const Inputs = this.props.inputs;
    const formType = this.props.formType;
    return (
      <>
        <h3 className="auth-header-text">{formType} to Paimo</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <Inputs update={this.update} formType={formType}/>
        </form>
        <div className="auth-footer-text">
          <Route 
            path='/sign-in' 
            render={
              props => { 
                return (
                  <Link className='signup-link' to="/signup" {...props}>
                    Sign Up
                  </Link>
                )
              }
            }
          />
        </div>
      </>
    );
  }
}