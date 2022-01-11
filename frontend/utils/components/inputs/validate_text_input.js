import addValidInputStyle from "./add_valid_input_style";
import displayErrorMessage from "./display_error_message";

export default function validateTextInput(inputEl, minLength) {
  const inputLength = inputEl.value.length
  if (inputLength < minLength)
    displayErrorMessage(inputEl, `Must be at least ${minLength} characters`)
  else
    addValidInputStyle(inputEl);
}