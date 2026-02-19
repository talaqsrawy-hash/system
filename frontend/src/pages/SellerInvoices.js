import React from 'react';
import Navbar from '../components/Navbar';

const SellerInvoices = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Seller Invoices</h2>
      <p>View and generate invoices for sold items here.</p>
    </div>
  </>
);

export default SellerInvoices;
