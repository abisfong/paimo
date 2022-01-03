import React from 'react';
import AuthInput from './auth_input';
import validateTextInput from '../../utils/components/inputs/validate_text_input';
import validateEmailInput from '../../utils/components/inputs/validate_email_input';
import validatePasswordInput from '../../utils/components/inputs/validate_password_input';

export default class SigninInputs extends React.Component{
  constructor(props) {
    super(props);
  }

  onChangeHandler(fields) {
    return e => {
      const inputEl = e.target;
      this.props.update(fields, inputEl.value);
      switch (fields[0]) {
        case 'username':
          validateTextInput(inputEl, 3);
          if (inputEl.value.includes('@'))
            validateEmailInput(inputEl);
          break;
        case 'password':
          validatePasswordInput(inputEl);
      }
    }
  }

  render() {
    return (
      <>
        <AuthInput 
          id='emailOrUsername'
          className="auth input"
          type='text'
          label='Email or Username'
          onChange={this.onChangeHandler(['username'])}
        />
        <AuthInput 
          id='password'
          className="auth input"
          type='password'
          label='Password'
          onChange={this.onChangeHandler(['password'])}
        />
        <div className='auth form-submit'>
          <button 
            className='demo-button'
            onClick={e => {
              e.preventDefault();
              this.props.signin({username: 'demo', password: 'password'})
            }}
          >
            Demo
          </button>
          <button>{this.props.formType}</button>
        </div>
      </>
    )
  }
}