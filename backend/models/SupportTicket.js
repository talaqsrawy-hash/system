const mongoose = require('mongoose');

const ticketMessageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  senderRole: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
}, { _id: false });

const supportTicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  subject: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ['low','medium','high','urgent'], default: 'medium' },
  status: { type: String, enum: ['open','in_progress','resolved','closed'], default: 'open' },
  messages: [ticketMessageSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportTicket', supportTicketSchema);
