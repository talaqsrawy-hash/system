// script.js: Core logic for Multi-Vendor E-Commerce (Vanilla JS)

const CATEGORIES = [
  'Building Materials',
  'Clothing & Accessories',
  'Car Parts',
  'Phone Accessories',
  'Phone Parts'
];

function getUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

function setUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('currentUser');
  location.reload();
}

function loginAs(role) {
  // For demo: always use first user of that role
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(u => u.role === role);
  setUser(user);
  renderApp();
}

function renderNavbar() {
  const user = getUser();
  const menu = document.getElementById('navbar-menu');
  menu.innerHTML = '';
  if (!user) return;
  if (user.role === 'BUYER') {
    menu.innerHTML = `
      <a href="#" onclick="goHome()">Home</a>
      <a href="#" onclick="showShop()">Shop</a>
      <a href="#" onclick="showCart()">Cart</a>
      <a href="#" onclick="showProfile()">My Profile</a>
      <a href="#" onclick="showInvoices()">My Invoices</a>
      <a href="#" onclick="showSupport()">Support</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="#" onclick="showSellerDashboard()">Dashboard</a>
      <a href="#" onclick="showSellerProducts()">My Products</a>
      <a href="#" onclick="showBulkImport()">Bulk Import</a>
      <a href="#" onclick="showSellerOrders()">Orders</a>
      <a href="#" onclick="showSellerInvoices()">Invoices</a>
      <a href="#" onclick="showSellerSupport()">Support</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  }
}

function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<h3>${cat}</h3><button class="btn" onclick="showShop('${cat}')">View Products</button>`;
    grid.appendChild(div);
  });
}

function renderApp() {
  const user = getUser();
  document.getElementById('login-section').style.display = user ? 'none' : '';
  document.getElementById('main-content').style.display = user ? '' : 'none';
  renderNavbar();
  renderCategories();
}

// --- Shop, Cart, Profile, Invoices, Support, Seller logic ---
// For brevity, only category grid and login are implemented here.
// You can expand with more functions for each page as needed.

function goHome() {
  renderCategories();
}

window.onload = renderApp;
