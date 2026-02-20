// login.js: Login form handler
import { loginUser } from './auth.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const errorDiv = document.getElementById('auth-error');
  errorDiv.textContent = '';
  try {
    const res = await loginUser({ email, password });
    localStorage.setItem('token', res.token);
    window.location.href = 'index.html';
  } catch (err) {
    errorDiv.textContent = err.message || 'Login failed.';
  }
});
