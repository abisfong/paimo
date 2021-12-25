import React from 'react';
import Input from '../input';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.prevValue = '';
  }

  onChangeHandler() {
    return this.props.update(['transaction', 'amount'], inputEl => {
      const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;

      this.addLeadingZeroToDecimalPoint(inputEl, numOfPeriods);
      this.preventDuplicateDecimalPoint(inputEl, numOfPeriods);
      this.preventNumberWithLeadingZero(inputEl);
      this.changeInputWidth(inputEl);
    })
  }

  addLeadingZeroToDecimalPoint(inputEl) {
    if (inputEl.value === '.')
      inputEl.value = '0.';
  }

  preventDuplicateDecimalPoint(inputEl, numOfPeriods) {
    if (inputEl.value[0] === '.' && inputEl.value.length > 1 || numOfPeriods > 1)
      inputEl.value = this.prevValue;
  }

  preventNumberWithLeadingZero(inputEl, numOfPeriods) {
    const input = inputEl.value;
    if (input[0] === '0')
      if (numOfPeriods === 0 )
        inputEl.value = `${parseInt(input)}`
      else if (parseInt(input) > 0)
        inputEl.value = input.substring(1);
  }

  changeInputWidth(inputEl) {
    const input = inputEl.value;
    this.limitInputTo6WholeNumsAnd2Decimals(inputEl)
    if (input.length === 0 || input.length === 1 && input[0] === '0') {
      inputEl.value = '';
      inputEl.style.placeholder = '0';
    } 
    if (input.length <= 1)
      inputEl.style.width = '35px';
    else
      inputEl.style.width = `${this.calculateInputWidth(inputEl.value)}px`;
    this.prevValue = inputEl.value;
  }

  limitInputTo6WholeNumsAnd2Decimals(inputEl) {
    const wholeNums = `${parseInt(inputEl.value)}`;
    const decimals = (inputEl.value.match(/\.([0-9]+)/) || [])[1];
    if (wholeNums.length > 6)
      inputEl.value = this.prevValue;
    if (decimals && decimals.length > 2)
      inputEl.value = this.prevValue;
  }

  calculateInputWidth(input) {
    const allDigitsButOne = /[02-9]/g;
    const numOfDigitsNotOne = (input.match(allDigitsButOne) || []).length;
    const numOfOnes = (input.match(/1/g) || []).length;
    const numOfPeriods = (input.match(/[.]/g) || []).length;
    return numOfDigitsNotOne * 35 + numOfOnes * 30 + numOfPeriods * 10;
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