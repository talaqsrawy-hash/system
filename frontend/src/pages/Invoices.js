import React from 'react';
import Navbar from '../components/Navbar';

const Invoices = () => (
  <>
    <Navbar user={{role: 'BUYER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Invoices</h2>
      <p>List of your invoices will appear here.</p>
    </div>
  </>
);

export default Invoices;
