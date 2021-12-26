import getInputElements from "./get_input_elements";

export default function handleValidInputBlur(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);

  if (inputContainerEl.classList.contains('input-valid')) {
    inputContainerEl.classList.add('input-valid-blur');
    inputContainerEl.classList.remove('input-valid');
  } else if (!inputContainerEl.classList.contains('input-error')){
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = 'Required';
  }
}