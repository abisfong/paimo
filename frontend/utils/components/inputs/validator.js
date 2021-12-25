export default class InputValidator {
  constructor(inputEl) {
    this.inputEl = inputEl;
    this.validateTextInput = this.validateTextInput.bind(this);
  }

  validateTextInput(inputEl, minLength) {
    const { 
      inputContainerEl,
      inputErrorTextEl
    } = getInputElements(inputEl);
    const inputLength = inputEl.value.length

    removeFocusStyles(inputContainerEl);

    if (inputLength < minLength) {
      inputContainerEl.classList.add('input-error');
      inputErrorTextEl.innerHTML = `Must be at least ${minLength} characters`;
    } else {
      validateInput(inputEl);
    }
    if (inputLength == 0)
      inputErrorTextEl.innerHTML = 'Required';
  }
}