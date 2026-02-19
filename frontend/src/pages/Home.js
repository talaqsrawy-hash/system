import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <Navbar />
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Multi-Vendor E-Commerce</h1>
      <p className="mb-2">Browse products, manage your account, and shop from multiple vendors!</p>
    </div>
  </>
);

export default Home;
