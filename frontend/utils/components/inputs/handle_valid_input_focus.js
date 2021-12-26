export default function handleValidInputFocus(inputContainerEl) {
  if (inputContainerEl.classList.contains('input-valid-blur')) {
    inputContainerEl.classList.remove('input-valid-blur');
    inputContainerEl.classList.add('input-valid');
  }
}