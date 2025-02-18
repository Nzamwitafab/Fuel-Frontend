import React, { useState, useEffect } from "react";
import { Badge, Offcanvas, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, X } from "react-bootstrap-icons";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [animateButton, setAnimateButton] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };

    useEffect(() => {
        if (!show) {
            const interval = setInterval(() => {
                setAnimateButton(true);
                setTimeout(() => setAnimateButton(false), 1000);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [show]);

    return (
        <>
            {/* Universal Toggle Button */}
            <Button
                variant="dark"
                onClick={() => setShow(true)}
                className={`position-fixed top-2 start-2 m-3 shadow-lg ${animateButton ? 'pulse-animation' : ''
                    }`}
                style={{
                    zIndex: 1050,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                }}
            >
                <List size={24} />
            </Button>

            {/* Universal Offcanvas Sidebar */}
            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                className="sidebar-width"
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                <Offcanvas.Header className="border-bottom" style={{ padding: '1.5rem' }}>
                    <Offcanvas.Title className="d-flex align-items-center">
                        <img
                            src="/Images/icon.png"
                            alt="Logo"
                            height="30"
                            className="me-2"
                        />
                        <span className="fw-bold">Station Management</span>
                    </Offcanvas.Title>
                    <Button
                        variant="link"
                        onClick={() => setShow(false)}
                        className="text-dark p-0"
                        style={{ fontSize: '1.5rem' }}
                    >
                        <X size={24} />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <SidebarContent handleLogout={handleLogout} setShow={setShow} />
                </Offcanvas.Body>
            </Offcanvas>

            <style>
                {`
                    .sidebar-width {
                        width: 350px !important;
                        
                    }
                    
                    .offcanvas {
                        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                        background-color: white;
                        height: 100vh;
                    }
                    
                    .pulse-animation {
                        animation: pulse 1s;
                    }
                    
                    @keyframes pulse {
                        0% {
                            transform: scale(1);
                            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
                        }
                        
                        70% {
                            transform: scale(1.1);
                            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                        }
                        
                        100% {
                            transform: scale(1);
                            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                        }
                    }
                    
                    .nav-link-hover {
                        transition: all 0.3s ease;
                    }
                    
                    .nav-link-hover:hover {
                        background-color: rgba(0, 0, 0, 0.05);
                        transform: translateX(5px);
                    }

                    /* Add slide animation for sidebar */
                    .offcanvas {
                        transition: transform 0.3s ease-in-out !important;
                    }

                    .offcanvas.showing,
                    .offcanvas.hiding,
                    .offcanvas.show {
                        transform: none !important;
                    }
                `}
            </style>
        </>
    );
};

// SidebarContent component remains the same as in your current code
const SidebarContent: React.FC<{
    handleLogout: () => void;
    setShow: (show: boolean) => void;
}> = ({ handleLogout, setShow }) => {
    const location = useLocation();

    const handleClick = () => {
        setShow(false);
    };

    return (
        <div className="d-flex flex-column bg-white h-100">
            {/* Profile Section */}
            <div className="text-center p-4 border-bottom">
                <div className="position-relative d-inline-block mb-3">
                    <img
                        src="/Images/profile.jpeg"
                        alt="Profile"
                        className="rounded-circle border"
                        width={70}
                        height={70}
                        style={{
                            border: "3px solid #f0f0f0",
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <Badge
                        bg="danger"
                        className="position-absolute top-0 start-100 translate-middle rounded-circle"
                        style={{
                            padding: "0.4rem 0.6rem",
                            fontSize: "0.8rem",
                            marginLeft: "-0.5rem",
                        }}
                    >
                        3
                    </Badge>
                </div>
                <h5 className="fw-bold text-dark mb-0">Uwimana Sarah</h5>
                <small className="text-muted">Station Manager</small>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow-1 p-4">
                <ul className="list-unstyled mb-0">
                    {[
                        { to: "/station/dashboard", label: "Dashboard", icon: "📊" },
                        { to: "/station/fuel-services", label: "Fuel Services", icon: "⛽" },
                        { to: "/station/reports", label: "Reports", icon: "📈" },
                    ].map((item, index) => (
                        <li key={index} className="mb-3">
                            <Link
                                to={item.to}
                                onClick={handleClick}
                                className="nav-link-hover text-decoration-none fw-semibold d-block py-2 px-3 rounded"
                                style={{
                                    fontSize: "1.1rem",
                                    color: location.pathname === item.to ? "#fff" : "#333",
                                    backgroundColor: location.pathname === item.to ? "#000" : "transparent",
                                }}
                            >
                                <span className="me-2">{item.icon}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Links */}
            <div className="p-4 border-top">
                <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                        <Link
                            to="/station/profile"
                            onClick={handleClick}
                            className="nav-link-hover text-decoration-none fw-semibold d-block py-2 px-3 rounded"
                            style={{
                                fontSize: "1.1rem",
                                color: location.pathname === "/station/profile" ? "#fff" : "#666",
                                backgroundColor: location.pathname === "/station/profile" ? "#000" : "transparent",
                            }}
                        >
                            👤 Profile
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="nav-link-hover btn btn-link text-decoration-none fw-semibold d-block py-2 px-3 rounded w-100 text-start"
                            style={{
                                fontSize: "1.1rem",
                                color: "#666",
                            }}
                        >
                            🚪 Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;