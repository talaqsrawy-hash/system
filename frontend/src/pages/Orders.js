import React from 'react';
import Navbar from '../components/Navbar';

const Orders = () => (
  <>
    <Navbar user={{role: 'BUYER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <p>View your past orders here.</p>
    </div>
  </>
);

export default Orders;
