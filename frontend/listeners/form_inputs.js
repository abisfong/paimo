const sessionFormEl = document.getElementById('session-form');

if (sessionFormEl) {
  sessionFormEl.addEventListener('change', e => {
    switch (e.target.id) {
      case 'emailOrUsername':
        handleEmailOrUsernameInput(e.target.value);
        break;
    }
  });
}

function handleEmailOrUsernameInput(input) {

}