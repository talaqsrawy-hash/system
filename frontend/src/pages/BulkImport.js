import React from 'react';
import Navbar from '../components/Navbar';

const BulkImport = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Bulk Import Products</h2>
      <p>Upload a CSV file to add multiple products at once.</p>
    </div>
  </>
);

export default BulkImport;
