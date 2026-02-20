// invoices.js: Invoice detail page logic
window.addEventListener('DOMContentLoaded', () => {
  // Example stub: Replace with API calls
  document.getElementById('seller-info').textContent = 'Acme Store';
  document.getElementById('buyer-info').textContent = 'John Doe';
  document.getElementById('invoice-date').textContent = '2026-02-20';
  document.getElementById('invoice-items').innerHTML = `
    <tr><td>Cement Bag</td><td>SKU123</td><td>2</td><td>$10.00</td><td>$20.00</td></tr>
    <tr><td>Steel Rod</td><td>SKU456</td><td>1</td><td>$25.00</td><td>$25.00</td></tr>
  `;
  document.getElementById('subtotal').textContent = '45.00';
  document.getElementById('shipping').textContent = '10.00';
  document.getElementById('tax').textContent = '4.50';
  document.getElementById('grand-total').textContent = '59.50';
  document.getElementById('status-badge').textContent = 'Paid';
});
