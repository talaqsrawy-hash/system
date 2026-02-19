import React from 'react';
import Navbar from '../components/Navbar';

const SellerProducts = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">My Products</h2>
      <p>Manage your products here.</p>
    </div>
  </>
);

export default SellerProducts;
