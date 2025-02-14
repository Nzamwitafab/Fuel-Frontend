import { Search, Bell } from 'lucide-react';

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm" style={{ zIndex: 10, width: '80%', marginLeft:"15%" }} >
            {/* Search Bar */}
            <div className="d-flex align-items-center flex-grow-1">
                <input
                    type="text"
                    className="form-control rounded-pill px-4"
                    placeholder="Search for Everything"
                    style={{ maxWidth: '300px' }}
                />
                <Search size={20} className="ms-2 text-muted" />
            </div>

            {/* Right Section */}
            <div className="d-flex align-items-center">
                {/* Currency Selector */}
                <div className="d-flex align-items-center me-4">
                    <img src="/Images/icon.png" alt="Fuel" className="me-2" style={{ width: 24, height: 24 }} />
                    <span className="fw-bold">Fuel-Tracker</span>
                </div>

                {/* Notification Bell */}
                <div className="position-relative me-4">
                    <Bell size={24} className="text-muted" />
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: '0.6rem' }}
                    >
                        3
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
