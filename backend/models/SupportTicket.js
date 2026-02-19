const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['OPEN', 'CLOSED', 'PENDING'], default: 'OPEN' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportTicket', supportTicketSchema);