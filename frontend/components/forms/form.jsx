import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.payload;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(fields, cb) {
    return (e) => {
      const nextState = updateSlice(fields, e.target.value);
      this.setState({
        [fields[0]]: nextState
      });

      if (cb) cb(e.target);
    }
  }

  updateSlice(fields, value) {
    let sliceToUpdate;
    let field = fields[fields.length - 1];
    for (let i = 0; i < fields.length - 1; i++)
      sliceToUpdate = this.state[fields[i]];
    sliceToUpdate[field] = value;
    return this.state[fields[0]];
  }

  render() {
    const Inputs = this.props.inputs;
    const FormHeader = this.props.formHeader || <></>;
    const FormFooter = this.props.formFooter || <></>;
    const className = this.props.className;
    const formType = this.props.formType;
    return (
      <>
        { FormHeader }
        <form className={className} onSubmit={this.handleSubmit}>
          <Inputs update={this.update} formType={formType} state={this.state}/>
        </form>
        { FormFooter }
      </>
    );
  }
}