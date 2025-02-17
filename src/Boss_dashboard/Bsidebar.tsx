import React, { useState } from 'react';
import { Badge, Offcanvas, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { List } from "react-bootstrap-icons";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
    };

    const mainMenuItems = [
        { to: "/boss/dashboard", label: "Dashboard" },
        { to: "/boss/reports", label: "Reports & Analysis" }
    ];

    const bottomMenuItems = [
        { to: "/boss/profile", label: "Profile" },
        {
            to: "#",
            label: "Logout",
            onClick: handleLogout
        }
    ];

    const SidebarContent = () => (
        <div
            className="d-flex flex-column align-items-center bg-white"
            style={{ height: '100vh', width: '350px', padding: '150px 0' }}
        >
            <div className="d-flex flex-column align-items-center mt-5">
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

            {/* Main Navigation */}
            <nav className="w-100 text-center mt-5" style={{ padding: '60px 0px' }}>
                <ul className="list-unstyled">
                    {mainMenuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <Link
                                to={item.to}
                                className="text-decoration-none fw-semibold px-3 py-2 d-inline-block w-75 rounded"
                                style={{
                                    fontSize: '1.1rem',
                                    color: location.pathname === item.to ? '#fff' : '#333',
                                    backgroundColor: location.pathname === item.to ? '#000' : 'transparent',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Menu */}
            <div className="w-100 text-center mt-auto mb-4">
                <hr className="mx-auto" style={{ width: '80%', borderTop: '2px solid #e0e0e0' }} />
                <ul className="list-unstyled">
                    {bottomMenuItems.map((item, index) => (
                        <li key={index} className="mb-3">
                            {item.onClick ? (
                                <a
                                    href={item.to}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        item.onClick();
                                    }}
                                    className="text-decoration-none fw-semibold px-3 py-2 d-inline-block w-75 rounded"
                                    style={{
                                        fontSize: '1.1rem',
                                        color: '#666',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    to={item.to}
                                    className="text-decoration-none fw-semibold px-3 py-2 d-inline-block w-75 rounded"
                                    style={{
                                        fontSize: '1.1rem',
                                        color: location.pathname === item.to ? '#fff' : '#666',
                                        backgroundColor: location.pathname === item.to ? '#000' : 'transparent',
                                        transition: 'all 0.3s ease'
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

    return (
        <>
            {/* Mobile Toggle Button */}
            <Button
                variant="dark"
                onClick={() => setShow(true)}
                className="d-lg-none position-fixed top-2 start-2 m-3 shadow-lg"
                style={{ zIndex: 1050 }}
            >
                <List size={30} />
            </Button>

            {/* Responsive Sidebar */}
            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                responsive="lg"
                className="sidebar-width"
            >
                <Offcanvas.Header closeButton className="d-lg-none">
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <SidebarContent />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Custom styling for large screens */}
            <style>
                {`
                    @media (min-width: 992px) {
                        .sidebar-width {
                            width: 350px !important;
                        }
                        .offcanvas-lg {
                            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                            background-color: white;
                            height: 100vh;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Sidebar;