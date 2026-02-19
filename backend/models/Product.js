const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['BUILDING_MATERIALS', 'CLOTHING_ACCESSORIES', 'CAR_PARTS', 'PHONE_ACCESSORIES', 'PHONE_PARTS'], required: true },
  subcategory: String,
  stock: { type: Number, default: 0 },
  images: [String],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);