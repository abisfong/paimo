export default function getInputElements(inputEl) {
  const inputContainerEl = inputEl.parentElement;
  const inputLabelEl = inputContainerEl.querySelector('label');
  const inputErrorTextEl = inputContainerEl.querySelector('.invalid-input-text');
  return {
    inputContainerEl,
    inputLabelEl,
    inputErrorTextEl
  }
}