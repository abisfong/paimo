import React from 'react';
import AuthInput from './auth_input';
import { 
  validateTextInput,
  validateEmailInput,
  validatePasswordInput
} from '../../utils/components/inputs/auth_input_validators';

export default class SignupInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler(fields) {
    return e => {
      this.props.update(fields);
      switch(fields[0]) {
        case 'first_name':
        case 'last_name':
          validateTextInput(e.target, 1);
          break;
        case 'email':
          validateEmailInput(e.target, 1);
          break;
        case 'username':
          validateTextInput(e.target, 3);
          break;
        case 'password':
        case 'confirm_password':
          validatePasswordInput(e.target);
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
          <button>{this.props.formType}</button>
        </div>
      </>
    )
  }
}