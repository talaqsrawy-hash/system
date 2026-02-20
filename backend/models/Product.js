const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discountPrice: Number,
  stock: { type: Number, default: 0 },
  sku: String,
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  images: [String],
  tags: [String],
  status: { type: String, enum: ['active', 'inactive', 'out_of_stock'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
