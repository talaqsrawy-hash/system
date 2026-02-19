import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => (
  <>
    <Navbar user={{role: 'SELLER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
      <p>Overview of sales and performance for sellers.</p>
    </div>
  </>
);

export default Dashboard;
