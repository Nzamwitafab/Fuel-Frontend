import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Forgot password request for:', email);
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Left Section - Form */}
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="w-75">
                        <h1 className="fw-bold mb-2">Forgot Password? 🤔</h1>
                        <p className="text-muted mb-4">Enter your email to receive a password reset link.</p>

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Send Reset Link
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

export default ForgotPassword;
