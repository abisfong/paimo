import getInputElements from "./get_input_elements";

export default function addInvalidInputStyle(inputEl, innerHTML) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length;
  inputContainerEl.classList.remove('input-valid');
  inputContainerEl.classList.add('input-error');
  if (innerHTML)
    inputErrorTextEl.innerHTML = inputLength === 0 ? 'Required' : innerHTML;
}