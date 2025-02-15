import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Bsidebar';

const Blayout: React.FC = () => {
    return (
        <div className="d-flex min-vh-100">
            {/* Sidebar */}
            <aside className="sidebar bg-white shadow-sm" style={{
                width: '250px',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 1000
            }}>
                <Sidebar />
            </aside>

            {/* Main content area */}
            <main className="flex-grow-1" style={{ marginLeft: '250px' }}>
                {/* Main content wrapper */}
                <div className="p-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Blayout;