import addValidInputStyle from './add_valid_input_style';
import displayErrorMessage from './display_error_message';

export default function validatePasswordInput(inputEl) {
  const inputLength = inputEl.value.length
  if (inputLength < 8)
    displayErrorMessage(inputEl, 'Password must be 8 characters or more');
  else
    addValidInputStyle(inputEl);
}