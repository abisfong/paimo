import getInputElements from "./get_input_elements";

export default function insertErrorMessage(inputEl, innerHTML) {
  const { 
    inputErrorTextEl
  } = getInputElements(inputEl);
  const inputLength = inputEl.value.length;
  inputErrorTextEl.innerHTML = inputLength === 0 ? 'Required' : innerHTML;
}