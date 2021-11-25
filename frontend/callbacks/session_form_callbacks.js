export function handleTextInput(authInputEl, minLength) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);
  const authInputLength = authInputEl.value.length

  removeFocusStyles(authInputContainerEl);

  if (authInputLength < minLength) {
    authInputContainerEl.classList.add('auth-input-error');
    authInputErrorTextEl.innerHTML = 'Must be at least 3 characters';
  } else {
    validateInput(authInputEl);
  }
  if (authInputLength == 0)
    authInputErrorTextEl.innerHTML = 'Required';
}

export function handleEmailInput(authInputEl) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);
  const authInputLength = authInputEl.value.length
  const input = authInputEl.value;

  removeFocusStyles(authInputContainerEl);

  if (!isValidEmail(input)) {
    authInputContainerEl.classList.add('auth-input-error');
    authInputErrorTextEl.innerHTML = 'Invalid email';
  } else {
    validateInput(authInputEl);
  }
  if (authInputLength == 0)
    authInputErrorTextEl.innerHTML = 'Required';
}

function isValidEmail(input) {
  return /\w+@\w+\.\w+/.test(input);
}

export function handlePasswordInput(authInputEl) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);
  const authInputLength = authInputEl.value.length


  removeFocusStyles(authInputContainerEl);

  if (authInputLength < 8) {
    authInputContainerEl.classList.add('auth-input-error');
    authInputContainerEl.classList.remove('auth-input-valid');
    authInputErrorTextEl.innerHTML = 'Password must be 8 characters or more';
  } else {
    validateInput(authInputEl)
  }
  if (authInputLength == 0)
    authInputErrorTextEl.innerHTML = 'Required';
}

export function handleValidInputFocus(authInputContainerEl) {
  authInputContainerEl.classList.remove('auth-input-valid-blur');
}

export function handleValidInputBlur(authInputEl) {
  console.log(authInputEl);
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);

  if (authInputContainerEl.classList.contains('auth-input-valid')) {
    authInputContainerEl.classList.add('auth-input-valid-blur');
    authInputContainerEl.classList.remove('auth-input-valid');
  } else if (!authInputContainerEl.classList.contains('auth-input-error')){
    authInputContainerEl.classList.add('auth-input-error');
    authInputErrorTextEl.innerHTML = 'Required';
  }
}

function getAuthInputElements(authInputEl) {
  const authInputContainerEl = authInputEl.parentElement;
  const authInputLabel = authInputContainerEl.querySelector('label')
  const authInputErrorTextEl = authInputContainerEl.querySelector('span');
  return {
    authInputContainerEl,
    authInputLabel,
    authInputErrorTextEl
  }
}

function removeFocusStyles(authInputContainerEl) {
  authInputContainerEl.classList.remove('auth-input-valid');
  authInputContainerEl.classList.remove('auth-input-valid-blur');
}

function validateInput(authInputEl) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);
  authInputContainerEl.classList.remove('auth-input-error');
  authInputContainerEl.classList.add('auth-input-valid');
  authInputErrorTextEl.innerHTML = '';
}

function displayRequiredMessage() {
  
}