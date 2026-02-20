const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

const router = express.Router();

// List all active products (public, with filters)
router.get('/', async (req, res) => {
  const { category, subcategory, sort, page = 1, limit = 10 } = req.query;
  const filter = { status: 'active' };
  if (category) filter.category = category;
  if (subcategory) filter.subcategory = subcategory;
  const sortOptions = {
    newest: { createdAt: -1 },
    'price-low': { price: 1 },
    'price-high': { price: -1 },
    popular: { stock: -1 }
  };
  const products = await Product.find(filter)
    .sort(sortOptions[sort] || { createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(products);
});

// Single product detail (public)
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found.' });
  res.json(product);
});

// Seller's own products (auth: seller)
router.get('/seller/mine', auth('seller'), async (req, res) => {
  const products = await Product.find({ sellerId: req.user.id });
  res.json(products);
});

// Add product (auth: seller)
router.post('/', auth('seller'), [
  body('title').notEmpty(),
  body('category').notEmpty(),
  body('subcategory').notEmpty(),
  body('price').isNumeric()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const { title, description, price, discountPrice, stock, sku, category, subcategory, images, tags, status } = req.body;
  const product = await Product.create({
    sellerId: req.user.id,
    title,
    description,
    price,
    discountPrice,
    stock,
    sku,
    category,
    subcategory,
    images,
    tags,
    status
  });
  res.status(201).json(product);
});

// Edit product (auth: seller, owns it)
router.put('/:id', auth('seller'), async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product || String(product.sellerId) !== req.user.id) return res.status(403).json({ message: 'Forbidden.' });
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// Delete product (auth: seller, owns it)
router.delete('/:id', auth('seller'), async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product || String(product.sellerId) !== req.user.id) return res.status(403).json({ message: 'Forbidden.' });
  await product.remove();
  res.json({ message: 'Product deleted.' });
});

module.exports = router;
