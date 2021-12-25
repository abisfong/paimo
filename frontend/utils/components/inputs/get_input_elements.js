export default function getInputElements(inputEl) {
  const inputContainerEl = inputEl.parentElement;
  const inputLabel = inputContainerEl.querySelector('label');
  const inputErrorTextEl = inputContainerEl.querySelector('span');
  return {
    inputContainerEl,
    inputLabel,
    inputErrorTextEl
  }
}