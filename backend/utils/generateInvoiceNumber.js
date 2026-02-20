// generateInvoiceNumber.js - Utility to auto-generate invoice numbers
module.exports = function generateInvoiceNumber(year, lastNumber) {
  // Format: INV-YYYY-NNNNN
  const padded = String(lastNumber + 1).padStart(5, '0');
  return `INV-${year}-${padded}`;
};
