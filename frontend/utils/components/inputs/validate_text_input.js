import addValidInputStyle from "./add_valid_input_style";
import addInvalidInputStyle from "./add_invalid_input_style";

export default function validateTextInput(inputEl, minLength) {
  const inputLength = inputEl.value.length
  if (inputLength < minLength)
    addInvalidInputStyle(inputEl, `Must be at least ${minLength} characters`)
  else
    addValidInputStyle(inputEl);
}