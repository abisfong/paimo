import getInputElements from "./get_input_elements";

export default function addInvalidInputStyle(inputEl, innerHTML) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length;
  inputContainerEl.classList.remove('valid-input');
  inputContainerEl.classList.add('invalid-input');
  if (innerHTML)
    inputErrorTextEl.innerHTML = inputLength === 0 ? 'Required' : innerHTML;
}