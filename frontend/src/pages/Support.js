import React from 'react';
import Navbar from '../components/Navbar';

const Support = () => (
  <>
    <Navbar user={{role: 'BUYER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Support Tickets</h2>
      <p>Open and view your support tickets here.</p>
    </div>
  </>
);

export default Support;
