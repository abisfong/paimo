import React from 'react';
import Input from '../input';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler() {
    return this.props.update(['transaction', 'amount'], inputEl => {
      const inputLength = inputEl.value.length;
      if (inputLength <= 9)
        inputEl.style.width = `${33 * inputLength}px`;
      else
        inputEl.value = inputEl.value.substring(0, 9);
    })
  }

  render() {
    <Input
      id='amount'
      type='text'
      label='$'
      className='amount'
      placeholder='0'
      onChange={this.onChangeHandler()}
      onFocus={e => {
        const inputContainer = e.target.parentElement;
        inputContainer.classList.add('amount-focus');
      }}
      onBlur={e => {
        const inputContainer = e.target.parentElement;
        inputContainer.classList.remove('amount-focus');
      }}
    />
  }
}