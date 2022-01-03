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
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.errorMessage = <>
      Enter a value greater than $0
      <ErrorIcon />
    </>
  }

  onChangeHandler(e) {
    const inputEl = e.target;
    const numOfPeriods = (inputEl.value.match(/[.]/g) || []).length;

    this.limitInputToNumeric(inputEl);
    this.limitInputTo6WholeNumsAnd2Decimals(inputEl)
    this.addPlaceholderWhenInputIsEmpty(inputEl);
    this.preventDecimalWithNoLeadingNum(inputEl, numOfPeriods);
    this.preventDuplicateDecimalPoint(inputEl, numOfPeriods);
    this.preventWholeNumberWithLeadingZero(inputEl, numOfPeriods);
    this.resizeInputElementToContentWidth(inputEl);
    this.validateAmountIsGreaterThanZero(inputEl);
    this.prevInput = inputEl.value;
    this.props.update(['amount'], inputEl.value);
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
      input.length === 1 && this.prevInput.length === 0 ? 
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
    inputEl.style.width = 0;
    if (inputEl.value.length == 0)
      inputEl.style.width = '34px';
    else
      inputEl.style.width = `${inputEl.scrollWidth}px`;
  }

  validateAmountIsGreaterThanZero(inputEl) {
    const { inputErrorTextEl } = getInputElements(inputEl);
    const amount = Number.parseFloat(inputEl.value);

    if (amount === 0 || Number.isNaN(amount))
      addInvalidInputStyle(inputEl);
    else
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
        errorMessage={this.errorMessage}
        onChange={this.onChangeHandler}
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