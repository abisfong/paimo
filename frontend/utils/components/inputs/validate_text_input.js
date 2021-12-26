import getInputElements from "./get_input_elements";
import removeFocusStyles from "./remove_focus_styles";
import addValidInputStyles from "./add_valid_input_styles";

export default function validateTextInput(inputEl, minLength) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length

  removeFocusStyles(inputContainerEl);

  if (inputLength < minLength) {
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = `Must be at least ${minLength} characters`;
  } else {
    addValidInputStyles(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}