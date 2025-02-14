import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface LoginFormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempted with:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Left Section - Form */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="w-75">
                        <h1 className="fw-bold mb-2">Welcome Back 👋</h1>
                        <p className="text-muted mb-4">Sign in to access your dashboard</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <Link to="/reset-password" className="text-primary text-decoration-none">
                                    Do you want to reset Password Sir!
                                </Link>
                                <Link to="/forgot" className="text-danger text-decoration-none">
                                    Forgot
                                </Link>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="col-lg-6 d-none d-lg-block">
                    <img src="/Images/pumpb.jpg" alt="Fuel pump" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
