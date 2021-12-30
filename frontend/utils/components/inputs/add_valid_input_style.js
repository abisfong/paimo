import getInputElements from "./get_input_elements";

export default function addValidInputStyle(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  inputContainerEl.classList.remove('invalid-input');
  inputContainerEl.classList.add('valid-input');
}