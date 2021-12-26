export default function getInputElements(inputEl) {
  const inputContainerEl = inputEl.parentElement;
  const inputLabelEl = inputContainerEl.querySelector('label');
  const inputErrorTextEl = inputContainerEl.querySelector('span');
  return {
    inputContainerEl,
    inputLabelEl,
    inputErrorTextEl
  }
}