import getInputElements from './get_input_elements';
import removeFocusStyles from './remove_focus_styles';
import addValidInputStyles from './add_valid_input_styles';

export default function validatePasswordInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length


  removeFocusStyles(inputContainerEl);

  if (inputLength < 8) {
    inputContainerEl.classList.add('input-error');
    inputContainerEl.classList.remove('input-valid');
    inputErrorTextEl.innerHTML = 'Password must be 8 characters or more';
  } else {
    addValidInputStyles(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}