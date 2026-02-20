// register.js: Register form handler
import { registerUser } from './auth.js';

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fullName = e.target.fullName.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const role = e.target.role.value;
  const errorDiv = document.getElementById('auth-error');
  errorDiv.textContent = '';
  try {
    await registerUser({ fullName, email, password, role });
    window.location.href = 'login.html';
  } catch (err) {
    errorDiv.textContent = err.message || 'Registration failed.';
  }
});
