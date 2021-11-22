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
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Inputs update={this.update} formType={this.props.formType}/>
        </form>
      </>
    );
  }
}