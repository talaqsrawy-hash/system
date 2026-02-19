import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
    <h2 className="font-bold text-lg mb-1">{product.name}</h2>
    <p className="text-gray-600 mb-2">{product.description}</p>
    <div className="mb-2">Category: <span className="font-semibold">{product.category}</span></div>
    <div className="mb-2">Price: <span className="text-green-600 font-bold">${product.price}</span></div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
  </div>
);

export default ProductCard;
