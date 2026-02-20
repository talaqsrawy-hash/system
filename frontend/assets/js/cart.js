// cart.js: Cart page logic
// This is a stub. You will need to connect to backend API for real cart data.
window.addEventListener('DOMContentLoaded', () => {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartSummaryDiv = document.getElementById('cart-summary');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Example cart data
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
    cartSummaryDiv.innerHTML = '';
    checkoutBtn.disabled = true;
    return;
  }

  let subtotal = 0;
  cartItemsDiv.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-qty">Qty: ${item.quantity}</div>
        </div>
        <span class="cart-item-remove" onclick="removeCartItem('${item.productId}')">Remove</span>
      </div>
    `;
  }).join('');

  cartSummaryDiv.innerHTML = `
    <div>Subtotal: $${subtotal.toFixed(2)}</div>
    <div>Shipping: $10.00</div>
    <div>Tax: $${(subtotal * 0.1).toFixed(2)}</div>
    <div><strong>Grand Total: $${(subtotal + 10 + subtotal * 0.1).toFixed(2)}</strong></div>
  `;

  checkoutBtn.onclick = () => {
    window.location.href = 'checkout.html';
  };
});

window.removeCartItem = function(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.productId !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.reload();
};
