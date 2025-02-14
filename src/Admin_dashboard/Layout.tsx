import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content on the right */}
      <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
