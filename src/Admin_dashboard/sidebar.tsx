import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems: MenuItem[] = [
    { path: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/admin/stations', icon: '⛽', label: 'Station Management' },
    { path: '/admin/users', icon: '👥', label: 'User Management' },
    { path: '/admin/vehicles', icon: '🚗', label: 'Vehicle Management' },
    { path: '/admin/drivers', icon: '🧑', label: 'Driver Management' },
    { path: '/admin/fuel', icon: '⛽', label: 'Fuel Replenishment' },
    { path: '/admin/reports', icon: '📈', label: 'Reports & Analytics' },
    { path: '/admin/settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className="d-flex flex-column vh-100 bg-light p-3 border-end position-fixed" style={{ width: '250px' }}>
      <div className="d-flex align-items-center mb-4">
        <img src="/Images/profile.jpeg" alt="Logo" className="rounded-circle me-2" width="40" height="40" />
        <h2 className="h5 mb-0">N.Fabrice</h2>
      </div>

      <nav>
        <p className="text-secondary small mb-3">MENU</p>
        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link d-flex align-items-center py-2 px-3 rounded ${location.pathname === item.path ? 'bg-primary text-white' : 'text-dark'
                  }`}
              >
                <span className="me-2">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <button
          onClick={() => {/* Add logout logic */ }}
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-start py-2 px-3"
        >
          <span className="me-2">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
