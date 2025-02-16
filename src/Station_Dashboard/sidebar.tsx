import React, { useState } from "react";
import { Badge, Offcanvas, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List } from "react-bootstrap-icons";

const Sidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
    };

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

            {/* Sidebar for Larger Screens */}
            <div className="d-none d-lg-flex flex-column align-items-center bg-white shadow-lg"
                style={{ height: "100vh", width: "350px", padding: "30px 0", position: "fixed" }}
            >
                <SidebarContent handleLogout={handleLogout} />
            </div>

            {/* Offcanvas Sidebar for Mobile */}
            <Offcanvas show={show && window.innerWidth < 992} onHide={() => setShow(false)} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContent handleLogout={handleLogout} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

// Sidebar Content Component (Reusable)
const SidebarContent: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
    const location = useLocation();

    return (
        <div className="text-center">
            {/* Profile Section */}
            <div className="d-flex flex-column align-items-center">
                <div className="position-relative mb-3">
                    <img
                        src="/Images/profile.jpeg"
                        alt="Profile"
                        className="rounded-circle border"
                        width={60}
                        height={60}
                        style={{ border: "3px solid #f0f0f0" }}
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
                <h5 className="fw-bold text-dark">Uwimana Sarah</h5>
            </div>

            {/* Navigation Links */}
            <nav className="w-100 text-left mt-4">
                <ul className="list-unstyled">
                    {[
                        { to: "/station/dashboard", label: "Dashboard" },
                        { to: "/station/fuel-services", label: "Fuel Services" },
                        { to: "/station/reports", label: "Reports" },
                    ].map((item, index) => (
                        <li key={index} className="mb-3">
                            <Link
                                to={item.to}
                                className="text-decoration-none fw-semibold d-block py-2 px-3 rounded"
                                style={{
                                    fontSize: "1.1rem",
                                    color: location.pathname === item.to ? "#fff" : "#333",
                                    backgroundColor: location.pathname === item.to ? "#000" : "transparent",
                                }}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Links */}
            <div className="w-100 text-left">
                <hr className="my-4" style={{ width: "80%", borderTop: "2px solid #e0e0e0" }} />
                <ul className="list-unstyled">
                    <li className="mb-3">
                        <Link
                            to="/station/profile"
                            className="text-decoration-none fw-semibold d-block py-2 px-3 rounded"
                            style={{
                                fontSize: "1.1rem",
                                color: location.pathname === "/station/profile" ? "#fff" : "#666",
                                backgroundColor: location.pathname === "/station/profile" ? "#000" : "transparent",
                            }}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="btn btn-link text-decoration-none fw-semibold d-block py-2 px-3 rounded"
                            style={{
                                fontSize: "1.1rem",
                                color: "#666",
                                padding: 0,
                            }}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
