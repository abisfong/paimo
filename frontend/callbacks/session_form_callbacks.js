export function handleEmailOrUsernameInput(authInputEl) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);

  removeFocusStyles(authInputContainerEl);

  if (authInputEl.value.length <= 0) {
    authInputContainerEl.classList.add('auth-input-error');
    // authInputContainerEl.classList.remove('auth-input-valid');
    authInputErrorTextEl.innerHTML = 'Required';
  } else if (authInputEl.value.length < 3) {
    authInputContainerEl.classList.add('auth-input-error');
    // authInputContainerEl.classList.remove('auth-input-valid');
    authInputErrorTextEl.innerHTML = 'Must be at least 3 characters';
  } else {
    authInputContainerEl.classList.remove('auth-input-error');
    authInputContainerEl.classList.add('auth-input-valid');
    authInputErrorTextEl.innerHTML = '';
  }
}

export function handlePasswordInput(authInputEl) {
  const { 
    authInputContainerEl,
    authInputErrorTextEl
  } = getAuthInputElements(authInputEl);

  removeFocusStyles(authInputContainerEl);

  if (authInputEl.value.length < 1) {
    authInputContainerEl.classList.add('auth-input-error');
    authInputContainerEl.classList.remove('auth-input-valid');
    authInputErrorTextEl.innerHTML = 'Required';
  } else {
    authInputContainerEl.classList.remove('auth-input-error');
    authInputContainerEl.classList.add('auth-input-valid');
    authInputErrorTextEl.innerHTML = '';
  }
}

export function handleValidInputFocus(authInputContainerEl) {
  authInputContainerEl.classList.remove('auth-input-valid-blur');
}

export function handleValidInputBlur(authInputContainerEl) {
  if (authInputContainerEl.classList.contains('auth-input-valid')) {
    authInputContainerEl.classList.add('auth-input-valid-blur');
    authInputContainerEl.classList.remove('auth-input-valid');
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