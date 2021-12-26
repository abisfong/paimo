import getInputElements from "./get_input_elements";
import removeFocusStyles from "./remove_focus_styles";
import addValidInputStyle from "./add_valid_input_style";

export default function validateTextInput(inputEl, minLength) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length

  if (inputLength < minLength) {
    inputContainerEl.classList.remove('input-valid');
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = `Must be at least ${minLength} characters`;
  } else {
    addValidInputStyle(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}