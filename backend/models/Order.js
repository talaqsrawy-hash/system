const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  title: String,
  price: Number,
  quantity: Number,
  subtotal: Number
}, { _id: false });

const orderSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalAmount: Number,
  shippingCost: Number,
  tax: Number,
  grandTotal: Number,
  status: { type: String, enum: ['pending','confirmed','shipped','delivered','cancelled','refunded'], default: 'pending' },
  shippingAddress: {
    street: String,
    city: String,
    country: String
  },
  paymentMethod: String,
  paymentStatus: { type: String, enum: ['unpaid','paid','refunded'], default: 'unpaid' },
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
