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
      console.log(inputEl.value);
      this.props.update(fields, inputEl.value);
      switch(fields[0]) {
        case 'first_name':
        case 'last_name':
          validateTextInput(inputEl, 1);
          break;
        case 'email':
          validateEmailInput(inputEl, 1);
          break;
        case 'username':
          validateTextInput(inputEl, 3);
          break;
        case 'password':
        case 'confirm_password':
          validatePasswordInput(inputEl);
      }
    }
  }
  
  render() {
    const formState = this.props.formState;
    const buttonLabel = this.props.buttonLabel;
    console.log(formState);
    return (
      <>
        <AuthInput
          id='first-name'
          className={`auth input ${formState.first_name ? 'valid-input-blur' : ''}`}
          type='text'
          label='First Name'
          value={formState.first_name}
          onChange={this.onChangeHandler(['first_name'])}
        />
        <AuthInput
          id='last-name'
          className={`auth input ${formState.last_name ? 'valid-input-blur' : ''}`}
          type='text'
          label='Last Name'
          value={formState.last_name}
          onChange={this.onChangeHandler(['last_name'])}
        />
        <AuthInput
          id='username'
          className={`auth input ${formState.username ? 'valid-input-blur' : ''}`}
          type='text'
          label='Username'
          value={formState.username}
          onChange={this.onChangeHandler(['username'])}
        />
        <AuthInput
          id='email'
          className={`auth input ${formState.email ? 'valid-input-blur' : ''}`}
          type='text'
          label='Email'
          value={formState.email}
          onChange={this.onChangeHandler(['email'])}
        />
        { 
          buttonLabel !== 'Update' ? 
            <>
              <AuthInput
                id='password'
                className='auth input'
                type='password'
                placeholder='********'
                label='Password'
                value={formState.password}
                onChange={this.onChangeHandler(['password'])}
              />
              <AuthInput
                id='confirm-password'
                className='auth input'
                type='password'
                placeholder='********'
                label='Confirm Password'
                value={formState.confirm_password}
                onChange={this.onChangeHandler(['confirm_password'])}
              />
            </> : ''
        }
        <div className='auth form-submit'>
          <button>{buttonLabel}</button>
        </div>
      </>
    )
  }
}