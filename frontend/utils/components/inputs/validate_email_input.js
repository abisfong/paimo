import isValidEmail from "../../../utils/is_valid_email";
import addValidInputStyle from "./add_valid_input_style";
import displayErrorMessage from "./display_error_message";

export default function validateEmailInput(inputEl) {
  const input = inputEl.value;
  if (!isValidEmail(input))
    displayErrorMessage(inputEl, 'Invalid email');
  else
    addValidInputStyle(inputEl);
}