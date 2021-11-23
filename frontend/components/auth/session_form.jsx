import React from 'react';

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
    const Inputs = this.props.inputs;
    const formType = this.props.formType;
    return (
      <>
        <h3 className="auth-header-text">{formType} to Paimo</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <Inputs update={this.update} formType={formType}/>
        </form>
      </>
    );
  }
}