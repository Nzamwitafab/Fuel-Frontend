import React from 'react';
import { Badge } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear tokens from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        // Navigate to login page
        navigate('/');
    };

    const mainMenuItems = [
        { to: "/boss/dashboard", label: "Dashboard" },
        { to: "/boss/reports", label: "Reports & Analaysis" }
    ];

    const bottomMenuItems = [
        { to: "/boss/profile", label: "Profile" },
        {
            to: "#", // Changed from direct routing to handle click
            label: "Logout",
            onClick: handleLogout
        }
    ];

    return (
        <div
            className="d-flex flex-column align-items-center bg-white"
            style={{ height: '100vh', width: '350px', padding: '30px 0' }}
        >
            <br /><br /><br /><br /><br />
            {/* Profile Section (Top) */}
            <div className="d-flex flex-column align-items-center">
                <div className="position-relative mb-3">
                    <img
                        src="/Images/profile.jpeg"
                        alt="Profile"
                        className="rounded-circle border"
                        width={60}
                        height={60}
                        style={{ border: '3px solid #f0f0f0' }}
                    />
                    <Badge
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle rounded-circle"
                        style={{
                            padding: '0.4rem 0.6rem',
                            fontSize: '0.8rem',
                            marginLeft: '-0.5rem'
                        }}
                    >
                        3
                    </Badge>
                </div>
                <h5 className="fw-bold text-dark">Uwimana Sarah</h5>
            </div>
            <br /><br />

            <nav className="w-100 text-center">
                <ul className="list-unstyled">
                    {mainMenuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <Link
                                to={item.to}
                                className="text-decoration-none fw-semibold"
                                style={{
                                    fontSize: '1.1rem',
                                    color: location.pathname === item.to ? '#000' : '#333',
                                    fontWeight: location.pathname === item.to ? 'bold' : 'normal'
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="w-100 text-center">
                <hr className="my-4" style={{ width: '80%', borderTop: '2px solid #e0e0e0' }} />
                <ul className="list-unstyled">
                    {bottomMenuItems.map((item, index) => (
                        <li key={index} className="mb-3">
                            {item.onClick ? (
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        item.onClick();
                                    }}
                                    className="text-decoration-none fw-semibold"
                                    style={{
                                        fontSize: '1.1rem',
                                        color: location.pathname === item.to ? '#000' : '#666',
                                        fontWeight: location.pathname === item.to ? 'bold' : 'normal',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    to={item.to}
                                    className="text-decoration-none fw-semibold"
                                    style={{
                                        fontSize: '1.1rem',
                                        color: location.pathname === item.to ? '#000' : '#666',
                                        fontWeight: location.pathname === item.to ? 'bold' : 'normal'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;