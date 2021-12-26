import addValidInputStyle from './add_valid_input_style';
import addInvalidInputStyle from './add_invalid_input_style';

export default function validatePasswordInput(inputEl) {
  const inputLength = inputEl.value.length
  if (inputLength < 8)
    addInvalidInputStyle(inputEl, 'Password must be 8 characters or more');
  else
    addValidInputStyle(inputEl);
}