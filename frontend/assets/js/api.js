// api.js: Axios/fetch wrapper
const API_BASE = 'http://localhost:5000';

async function request(url, method = 'GET', data = null, token = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const options = {
    method,
    headers,
    credentials: 'include',
  };
  if (data) options.body = JSON.stringify(data);

  const res = await fetch(API_BASE + url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export default {
  get: (url, token) => request(url, 'GET', null, token),
  post: (url, data, token) => request(url, 'POST', data, token),
  put: (url, data, token) => request(url, 'PUT', data, token),
  delete: (url, token) => request(url, 'DELETE', null, token)
};
