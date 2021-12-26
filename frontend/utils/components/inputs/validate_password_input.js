import getInputElements from './get_input_elements';
import removeFocusStyles from './remove_focus_styles';
import addValidInputStyle from './add_valid_input_style';

export default function validatePasswordInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length

  if (inputLength < 8) {
    inputContainerEl.classList.remove('input-valid');
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = 'Password must be 8 characters or more';
  } else {
    addValidInputStyle(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}