// Seller Bulk Import Utility (CSV Parsing)
const csv = require('csv-parser');
const fs = require('fs');
const Product = require('../models/Product');

// filePath: path to the uploaded CSV file
// sellerId: ID of the seller uploading products
async function bulkImportProducts(filePath, sellerId) {
  return new Promise((resolve, reject) => {
    const products = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        products.push({
          name: row.name,
          description: row.description,
          price: parseFloat(row.price),
          category: row.category,
          subcategory: row.subcategory,
          stock: parseInt(row.stock),
          images: row.images ? row.images.split(';') : [],
          seller: sellerId
        });
      })
      .on('end', async () => {
        try {
          await Product.insertMany(products);
          resolve({ success: true, count: products.length });
        } catch (err) {
          reject(err);
        }
      })
      .on('error', reject);
  });
}

module.exports = bulkImportProducts;
