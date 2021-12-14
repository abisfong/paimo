export function handleTextInput(inputEl, minLength) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getAuthInputElements(inputEl);
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

export function handleEmailInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getAuthInputElements(inputEl);
  const inputLength = inputEl.value.length
  const input = inputEl.value;

  removeFocusStyles(inputContainerEl);

  if (!isValidEmail(input)) {
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = 'Invalid email';
  } else {
    validateInput(inputEl);
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}

function isValidEmail(input) {
  return /\w+@\w+\.\w+/.test(input);
}

export function handlePasswordInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getAuthInputElements(inputEl);
  const inputLength = inputEl.value.length


  removeFocusStyles(inputContainerEl);

  if (inputLength < 8) {
    inputContainerEl.classList.add('input-error');
    inputContainerEl.classList.remove('input-valid');
    inputErrorTextEl.innerHTML = 'Password must be 8 characters or more';
  } else {
    validateInput(inputEl)
  }
  if (inputLength == 0)
    inputErrorTextEl.innerHTML = 'Required';
}

export function handleValidInputFocus(inputContainerEl) {
  if (inputContainerEl.classList.contains('input-valid-blur')) {
    inputContainerEl.classList.remove('input-valid-blur');
    inputContainerEl.classList.add('input-valid');
  }
}

export function handleValidInputBlur(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getAuthInputElements(inputEl);

  if (inputContainerEl.classList.contains('input-valid')) {
    inputContainerEl.classList.add('input-valid-blur');
    inputContainerEl.classList.remove('input-valid');
  } else if (!inputContainerEl.classList.contains('input-error')){
    inputContainerEl.classList.add('input-error');
    inputErrorTextEl.innerHTML = 'Required';
  }
}

function getAuthInputElements(inputEl) {
  const inputContainerEl = inputEl.parentElement;
  const inputLabel = inputContainerEl.querySelector('label');
  const inputErrorTextEl = inputContainerEl.querySelector('span');
  return {
    inputContainerEl,
    inputLabel,
    inputErrorTextEl
  }
}

function removeFocusStyles(inputContainerEl) {
  inputContainerEl.classList.remove('input-valid');
  inputContainerEl.classList.remove('input-valid-blur');
}

function validateInput(inputEl) {
  const { 
    inputContainerEl,
    inputErrorTextEl
  } = getAuthInputElements(inputEl);
  inputContainerEl.classList.remove('input-error');
  inputContainerEl.classList.add('input-valid');
  inputErrorTextEl.innerHTML = '';
}