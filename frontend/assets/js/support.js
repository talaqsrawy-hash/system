// support.js: Support ticket page logic
window.addEventListener('DOMContentLoaded', () => {
  // Example stub: Replace with API calls
  const ticketsDiv = document.getElementById('support-tickets');
  ticketsDiv.innerHTML = `
    <div class="support-ticket">
      <strong>Subject:</strong> Order not received<br>
      <strong>Status:</strong> Open<br>
      <button class="btn-primary" onclick="openTicketModal()">View</button>
    </div>
  `;
});

window.openTicketModal = function() {
  const modal = document.getElementById('ticket-modal');
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Order not received</h2>
      <div>Status: Open</div>
      <div>Priority: High</div>
      <div>Messages:<br><em>Buyer:</em> Where is my order?<br><em>Seller:</em> Shipped yesterday.</div>
      <button class="btn-primary" onclick="closeTicketModal()">Close</button>
    </div>
  `;
  modal.style.display = 'flex';
};

window.closeTicketModal = function() {
  document.getElementById('ticket-modal').style.display = 'none';
};
