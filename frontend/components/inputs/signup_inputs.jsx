import React from 'react';
import AuthInput from './auth_input';
import validateTextInput from '../../utils/components/inputs/validate_text_input';
import validateEmailInput from '../../utils/components/inputs/validate_email_input';
import validatePasswordInput from '../../utils/components/inputs/validate_password_input';

export default class SignupInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler(fields) {
    return e => {
      const inputEl = e.target;
      this.props.update(fields, inputEl.value);
      switch(fields[0]) {
        case 'first_name':
        case 'last_name':
          validateTextInput(inputEl, 1, this.props.required);
          break;
        case 'email':
          validateEmailInput(inputEl, 1, this.props.required);
          break;
        case 'username':
          validateTextInput(inputEl, 3, this.props.required);
          break;
        case 'password':
        case 'confirm_password':
          validatePasswordInput(inputEl, this.props.required);
      }
    }
  }
  
  render() {
    const update = this.props.update;
    return (
      <>
        <AuthInput
          id='first-name'
          className='auth input'
          type='text'
          label='First Name'
          onChange={this.onChangeHandler(['first_name'])}
        />
        <AuthInput
          id='last-name'
          className='auth input'
          type='text'
          label='Last Name'
          onChange={this.onChangeHandler(['last_name'])}
        />
        <AuthInput
          id='username'
          className='auth input'
          type='text'
          label='Username'
          onChange={this.onChangeHandler(['username'])}
        />
        <AuthInput
          id='email'
          className='auth input'
          type='text'
          label='Email'
          onChange={this.onChangeHandler(['email'])}
        />
        <AuthInput
          id='password'
          className='auth input'
          type='password'
          label='Password'
          onChange={this.onChangeHandler(['password'])}
        />
        <AuthInput
          id='confirm-password'
          className='auth input'
          type='password'
          label='Confirm Password'
          onChange={this.onChangeHandler(['confirm_password'])}
        />
        <div className='auth form-submit'>
          <button>{this.props.buttonLabel}</button>
        </div>
      </>
    )
  }
}