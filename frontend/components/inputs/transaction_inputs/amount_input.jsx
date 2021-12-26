import React from 'react';
import Input from '../input';
import ErrorIcon from '../../icons/error_icon';
import addInvalidInputStyle from '../../../utils/components/inputs/add_invalid_input_style';
import addValidInputStyle from '../../../utils/components/inputs/add_valid_input_style';
import getInputElements from '../../../utils/components/inputs/get_input_elements';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.prevInput = '';
  }

  onChangeHandler() {
    return e => {
      console.log(e.target.value);
      e.preventDefault();
      console.log(e.target.value);
      console.log(e);
      const inputEl = e.target;
      const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;

      this.props.update(['transaction', 'amount'], inputEl.value);
      this.limitInputToNumeric(inputEl);
      this.limitInputTo6WholeNumsAnd2Decimals(inputEl)
      this.addPlaceholderWhenInputIsEmpty(inputEl);
      this.preventDecimalWithNoLeadingNum(inputEl, numOfPeriods);
      this.preventDuplicateDecimalPoint(inputEl, numOfPeriods);
      this.preventWholeNumberWithLeadingZero(inputEl, numOfPeriods);
      this.resizeInputElementToContentWidth(inputEl);
      this.validateAmountIsGreaterThanZero(inputEl);
      this.prevInput = inputEl.value;
    }
  }

  limitInputToNumeric(inputEl) {
    if ((/[^0-9.]/g).test(inputEl.value))
      inputEl.value = this.prevInput;
  }

  limitInputTo6WholeNumsAnd2Decimals(inputEl) {
    const wholeNums = `${parseInt(inputEl.value)}`;
    const decimals = (inputEl.value.match(/\.([0-9]+)/) || [])[1];
    if (wholeNums.length > 6)
      inputEl.value = this.prevInput;
    if (decimals && decimals.length > 2)
      inputEl.value = this.prevInput;
  }

  addPlaceholderWhenInputIsEmpty(inputEl) {
    const input = inputEl.value;
    if (input.length === 0 || input.length === 1 && input[0] === '0') {
      inputEl.value = '';
      inputEl.style.placeholder = '0';
    }
  }

  preventDecimalWithNoLeadingNum(inputEl) {
    const input = inputEl.value;
    if (input[0] === '.')
      input.length === 1 ? 
        inputEl.value = '0.' : 
        inputEl.value = this.prevInput;
  }

  preventDuplicateDecimalPoint(inputEl, numOfPeriods) {
    const input = inputEl.value;
    if (input[0] === '.' && input.length > 1 || numOfPeriods > 1)
      inputEl.value = this.prevInput;
  }

  preventWholeNumberWithLeadingZero(inputEl, numOfPeriods) {
    const input = inputEl.value;
    if (input[0] === '0')
      if (numOfPeriods === 0 )
        inputEl.value = `${parseInt(input)}`
      else if (parseInt(input) > 0)
        inputEl.value = input.substring(1);
  }

  resizeInputElementToContentWidth(inputEl) {
    const input = inputEl.value;
    if (input.length <= 1)
      inputEl.style.width = '34px';
    else
      inputEl.style.width = `${this.calculateInputWidth(input)}px`;
  }

  calculateInputWidth(input) {
    const allDigitsButOne = /[02-9]/g;
    const numOfDigitsNotOne = (input.match(allDigitsButOne) || []).length;
    const numOfOnes = (input.match(/1/g) || []).length;
    const numOfPeriods = (input.match(/[.]/g) || []).length;
    return numOfDigitsNotOne * 34 + numOfOnes * 26.5 + numOfPeriods * 10;
  }

  validateAmountIsGreaterThanZero(inputEl) {
    const { inputErrorTextEl } = getInputElements(inputEl);
    const amount = Number.parseFloat(inputEl.value);

    if (amount === 0 || Number.isNaN(amount)) {
      addInvalidInputStyle(inputEl);
      inputErrorTextEl.innerHTML = 'Enter a value greater than $0';
    } else
      addValidInputStyle(inputEl);
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
      >
        <ErrorIcon/>
      </Input>
    )
  }
}