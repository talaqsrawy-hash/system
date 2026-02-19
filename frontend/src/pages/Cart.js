import React from 'react';
import Navbar from '../components/Navbar';

const Cart = () => (
  <>
    <Navbar user={{role: 'BUYER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <p>Your cart items will appear here.</p>
    </div>
  </>
);

export default Cart;
