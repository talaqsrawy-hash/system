const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  tax: { type: Number, required: true },
  status: { type: String, enum: ['PAID', 'UNPAID', 'CANCELLED'], default: 'UNPAID' }
});

module.exports = mongoose.model('Invoice', invoiceSchema);