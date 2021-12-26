export default function handleValidInputFocus(inputContainerEl) {
  if (inputContainerEl.classList.contains('valid-input-blur')) {
    inputContainerEl.classList.remove('valid-input-blur');
    inputContainerEl.classList.add('valid-input');
  }
}