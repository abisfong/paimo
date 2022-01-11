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
    const history = this.props.history;
    const redirectTo = this.props.redirectTo;
    const submitForm = this.props.submitForm;
    
    e.preventDefault();
    submitForm(this.state).then(
      () => {
        if (history && redirectTo)
          history.push(redirectTo);
      }
    )
  }

  update(fields, input) {
    const nextState = this.updateSlice(fields, input);
    this.setState({
      [fields[0]]: nextState
    });
  }

  updateSlice(fields, value) {
    let sliceToUpdate = this.state;
    let field = fields[fields.length - 1];
    for (let i = 0; i < fields.length - 1; i++)
      sliceToUpdate = this.state[fields[i]];
    sliceToUpdate[field] = value;
    return this.state[fields[0]];
  }

  render() {
    const Inputs = this.props.inputs;
    const FormHeader = this.props.formHeader;
    const FormFooter = this.props.formFooter;
    const className = this.props.className;
    const buttonLabel = this.props.buttonLabel;
    return (
      <>
        { FormHeader }
        <form className={className} onSubmit={this.handleSubmit}>
          <Inputs 
            update={this.update} 
            buttonLabel={buttonLabel} 
            formState={this.state}
          />
        </form>
        { FormFooter }
      </>
    );
  }
}