const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  country: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'seller'], required: true },
  avatar: String,
  phone: String,
  address: addressSchema,
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  // Seller-only fields
  storeName: String,
  storeDescription: String,
  storeLogo: String,
  rating: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
