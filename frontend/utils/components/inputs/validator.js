import isValidEmail from "./is_valid_email";
import handleValidInputFocus from "./handle_valid_input_focus";
import getInputElements from "./get_input_elements";

export default class InputValidator {
  constructor(inputEl) {
    const { 
      inputContainerEl,
      inputLabelEl,
      inputErrorTextEl
    } = getInputElements(inputEl);
    this.inputContainerEl = inputContainerEl;
    this.inputLabelEl = inputLabelEl;
    this.inputErrorTextEl = inputErrorTextEl;
    this.inputEl = inputEl;
    this.validateTextInput = this.validateTextInput.bind(this);
  }

  validateText(inputEl, minLength) {
    const inputLength = inputEl.value.length

    removeFocusStyles(this.inputContainerEl);

    if (inputLength < minLength) {
      this.inputContainerEl.classList.add('input-error');
      this.inputErrorTextEl.innerHTML = `Must be at least ${minLength} characters`;
    } else {
      validateInput(inputEl);
    }
    if (inputLength == 0)
      this.inputErrorTextEl.innerHTML = 'Required';
  }

  validateEmail(inputEl) {
    const inputLength = inputEl.value.length
    const input = inputEl.value;

    removeFocusStyles(this.inputContainerEl);

    if (!isValidEmail(input)) {
      this.inputContainerEl.classList.add('input-error');
      this.inputErrorTextEl.innerHTML = 'Invalid email';
    } else {
      validateInput(inputEl);
    }
    if (inputLength == 0)
      this.inputErrorTextEl.innerHTML = 'Required';
  }

  validatePasswordInput(inputEl) {
    const inputLength = inputEl.value.length


    removeFocusStyles(this.inputContainerEl);

    if (inputLength < 8) {
      this.inputContainerEl.classList.add('input-error');
      this.inputContainerEl.classList.remove('input-valid');
      this.inputErrorTextEl.innerHTML = 'Password must be 8 characters or more';
    } else {
      validateInput(inputEl)
    }
    if (inputLength == 0)
      this.inputErrorTextEl.innerHTML = 'Required';
  }
}