import React from 'react';
import Navbar from '../components/Navbar';

const SellerOrders = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Seller Orders</h2>
      <p>View and manage your received orders here.</p>
    </div>
  </>
);

export default SellerOrders;
