import React from 'react';

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="font-bold text-xl">MultiVendor</div>
      <div>
        {user ? (
          user.role === 'SELLER' ? (
            <>
              <a href="/dashboard" className="mx-2">Dashboard</a>
              <a href="/products" className="mx-2">My Products</a>
              <a href="/orders" className="mx-2">Orders</a>
              <a href="/invoices" className="mx-2">Invoices</a>
              <a href="/support" className="mx-2">Support</a>
            </>
          ) : (
            <>
              <a href="/profile" className="mx-2">Profile</a>
              <a href="/cart" className="mx-2">Cart</a>
              <a href="/orders" className="mx-2">Orders</a>
              <a href="/invoices" className="mx-2">Invoices</a>
              <a href="/support" className="mx-2">Support</a>
            </>
          )
        ) : (
          <a href="/login" className="mx-2">Login</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
