const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Regex patterns for validation
const usernamePattern = /^[a-zA-Z0-9]{15,}$/;
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

function validateForm() {
  let isValid = true;

  // Username validation
  if (!usernamePattern.test(username.value)) {
    usernameError.textContent = 'Username must be at least 15 characters long and contain only alphanumeric characters.';
    usernameError.style.display = 'block';
    isValid = false;
  } else {
    usernameError.style.display = 'none';
  }

  // Email validation
  if (!emailPattern.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Password validation
  if (!passwordPattern.test(password.value)) {
    passwordError.textContent = 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.';
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  // Confirm password validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    confirmPasswordError.style.display = 'block';
    isValid = false;
  } else {
    confirmPasswordError.style.display = 'none';
  }

  // Enable or disable submit button based on validation status
  submitBtn.disabled = !isValid;
}

username.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
