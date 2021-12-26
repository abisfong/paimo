import getInputElements from "./get_input_elements";
import isValidEmail from "./is_valid_email";
import addValidInputStyle from "./add_valid_input_style";
import addInvalidInputStyle from "./add_invalid_input_style";

export default function validateEmailInput(inputEl) {
  const { inputErrorTextEl } = getInputElements(inputEl);
  const input = inputEl.value;

  if (!isValidEmail(input))
    addInvalidInputStyle(inputEl, 'Invalid email');
  else
    addValidInputStyle(inputEl);
  if (input.length == 0)
    inputErrorTextEl.innerHTML = 'Required';
}