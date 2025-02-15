import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Password reset attempt:', formData);
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
                        <h1 className="fw-bold mb-2">Reset Your Password 🔒</h1>
                        <p className="text-muted mb-4">Enter a new password to reset your account.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Enter Old Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="Oldpassword"
                                    name="Oldpassword"
                                    className="form-control"
                                    placeholder="Enter old password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    New Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter new password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Re-enter new password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Reset Password
                            </button>
                        </form>

                        <div className="mt-3 text-center">
                            <Link to="/" className="text-primary text-decoration-none">Back to Login</Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="col-lg-6 d-none d-lg-block">
                    <img src="/Images/sideImage.jpg" alt="Fuel pump" className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
