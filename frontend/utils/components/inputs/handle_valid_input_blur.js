import getInputElements from "./get_input_elements";

export default function handleValidInputBlur(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getInputElements(inputEl);

  if (inputContainerEl.classList.contains('valid-input') || 
    (!inputContainerEl.classList.contains('invalid-input') && inputEl.value)) {
    inputContainerEl.classList.add('valid-input-blur');
    inputContainerEl.classList.remove('valid-input');
  } else if (!inputContainerEl.classList.contains('invalid-input')){
    inputContainerEl.classList.add('invalid-input');
    inputErrorTextEl.innerHTML = 'Required';
  }
}