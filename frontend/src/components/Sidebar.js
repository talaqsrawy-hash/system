import React from 'react';

const Sidebar = ({ user }) => {
  if (!user) return null;
  return (
    <aside className="w-64 bg-gray-100 h-full p-4">
      <ul>
        {user.role === 'SELLER' ? (
          <>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/products">My Products</a></li>
            <li><a href="/bulk-import">Bulk Import</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/invoices">Invoices</a></li>
            <li><a href="/support">Support</a></li>
          </>
        ) : (
          <>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/invoices">Invoices</a></li>
            <li><a href="/support">Support</a></li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
