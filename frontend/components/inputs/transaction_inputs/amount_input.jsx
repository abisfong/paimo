import React from 'react';
import Input from '../input';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.prevValue = '';
  }

  onChangeHandler() {
    return this.props.update(['transaction', 'amount'], inputEl => {
      const input = inputEl.value;
      const inputLength = input.length;
      if (inputLength > 6)
        return inputEl.value = this.prevValue;
      if (inputLength === 0)
        inputEl.style.placeholder = '0';
      if (inputLength <= 1)
        inputEl.style.width = '33px';
      else if (inputLength <= 6)
        inputEl.style.width = `${this.calculateInputWidth(input)}px`;
      this.prevValue = input;
    })
  }

  calculateInputWidth(input) {
    const digitsNotOne = /[02-9]/g;
    const numOfDigitsNotOne = (input.match(digitsNotOne) || []).length;
    const numOfOnesAndPeriods = (input.match(/[1.]/g) || []).length;
    console.log(numOfDigitsNotOne);
    console.log(numOfOnesAndPeriods);
    return numOfDigitsNotOne * 33 + numOfOnesAndPeriods * 23.15;
  }

  render() {
    return (
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
    )
  }
}