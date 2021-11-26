import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class Form extends React.Component {
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
    const FormHeader = this.props.formHeader || <></>;
    const FormFooter = this.props.formFooter || <></>;
    const formType = this.props.formType;
    return (
      <>
        { FormHeader }
        <form className="form" onSubmit={this.handleSubmit}>
          <Inputs update={this.update} formType={formType}/>
        </form>
        { FormFooter }
      </>
    );
  }
}