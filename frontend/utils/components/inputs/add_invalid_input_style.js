import getInputElements from "./get_input_elements";

export default function addInvalidInputStyle(inputEl, innerHTML) {
  const { 
    inputContainerEl
  } = getInputElements(inputEl);
  inputContainerEl.classList.remove('valid-input');
  inputContainerEl.classList.add('invalid-input');
}