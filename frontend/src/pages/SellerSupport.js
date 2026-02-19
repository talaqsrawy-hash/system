import React from 'react';
import Navbar from '../components/Navbar';

const SellerSupport = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Seller Support</h2>
      <p>View and respond to support tickets here.</p>
    </div>
  </>
);

export default SellerSupport;
