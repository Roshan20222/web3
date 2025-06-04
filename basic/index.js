const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const usernameMsg = document.getElementById('usernameMessage');
const passwordMsg = document.getElementById('passwordMessage');

function validateUsername() {
  const value = usernameInput.value.trim();
  if (value.length < 4) {
    usernameInput.className = 'invalid';
    usernameMsg.textContent = 'Username must be at least 4 characters';
    usernameMsg.className = 'message error';
    return false;
  } else {
    usernameInput.className = 'valid';
    usernameMsg.textContent = 'Looks good!';
    usernameMsg.className = 'message success';
    return true;
  }
}

function validatePassword() {
  const value = passwordInput.value;
  const strong = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
  if (!strong.test(value)) {
    passwordInput.className = 'invalid';
    passwordMsg.textContent = 'Password must be 6+ chars, include a number, a symbol, and uppercase';
    passwordMsg.className = 'message error';
    return false;
  } else {
    passwordInput.className = 'valid';
    passwordMsg.textContent = 'Strong password!';
    passwordMsg.className = 'message success';
    return true;
  }
}

function checkFormValidity() {
  const isFormValid = validateUsername() && validatePassword();
  submitBtn.disabled = !isFormValid;
}

usernameInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
