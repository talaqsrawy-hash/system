// auth.js: Authentication logic
import axios from './api.js';

export async function registerUser(data) {
  return axios.post('/api/auth/register', data);
}

export async function loginUser(data) {
  return axios.post('/api/auth/login', data);
}

export async function getCurrentUser() {
  return axios.get('/api/auth/me');
}

export async function logoutUser() {
  return axios.post('/api/auth/logout');
}
