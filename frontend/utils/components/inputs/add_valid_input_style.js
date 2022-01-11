import getInputElements from "./get_input_elements";

export default function addValidInputStyle(inputEl) {
  const { 
    inputContainerEl
  } = getInputElements(inputEl);
  inputContainerEl.classList.remove('invalid-input');
  inputContainerEl.classList.add('valid-input');
}