import getInputElements from "./get_input_elements";

export default function addValidInputStyle(inputEl, innerHTML) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  inputContainerEl.classList.remove('input-valid');
  inputContainerEl.classList.add('input-error');
  inputErrorTextEl.innerHTML = innerHTML;
}