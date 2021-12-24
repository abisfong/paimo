import React from 'react';
import Input from '../input';

export default class AmountInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler() {
    return this.props.update(['transaction', 'amount'], inputEl => {
      const inputLength = inputEl.value.length;
      if (inputLength === 0) {
        inputEl.style.placeholder = '0';
      } else if (inputLength <= 9)
        
        inputEl.style.width = `${33 * inputLength}px`;
      else
        inputEl.value = inputEl.value.substring(0, 9);
    })
  }

  calculateInputWidth(value) {
    digitsNotOne = /[02-9]/g;
    widthOfDigitsNotOne = value.match(digitsNotOne).length || 0;
    widthOfOnesAndPeriods = value.match(/[1.]/g).length || 0;
    return widthOfDigitsNotOne * 33 + widthOfOnesAndPeriods * 18;
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