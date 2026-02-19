import React from 'react';
import Navbar from '../components/Navbar';

const Profile = () => (
  <>
    <Navbar user={{role: 'BUYER'}} />
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <p>Profile management page for buyers.</p>
    </div>
  </>
);

export default Profile;
