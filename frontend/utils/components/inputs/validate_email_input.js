import getInputElements from "./get_input_elements";
import removeFocusStyles from "./remove_focus_styles";
import addValidInputStyle from "./add_valid_input_style";
import isValidEmail from "./is_valid_email";

export default function validateEmailInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length
  const input = inputEl.value;

  if (!isValidEmail(input)) {
    inputContainerEl.classList.remove('input-valid');
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = 'Invalid email';
  } else {
    addValidInputStyle(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}