import React, { useState } from 'react';
import { Search, Edit, Trash2, Plus, X, Save, ChevronDown } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        station: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSave = () => {
        // Handle save logic here
        console.log('New User:', newUser);
        setIsModalOpen(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Management</h2>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="input-group" style={{ width: '300px' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search User By Name"
                    />
                    <span className="input-group-text bg-white border-start-0">
                        <Search className="text-muted" size={20} />
                    </span>
                </div>

                <button className="btn btn-dark d-flex align-items-center" onClick={() => setIsModalOpen(true)}>
                    <Plus className="me-2" size={16} /> Add New User
                </button>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>KAYITARE Sabine</td>
                                <td className="text-primary">sabine@gmail.com</td>
                                <td>250785206973</td>
                                <td>Manager</td>
                                <td>
                                    <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                    <button className="btn btn-link p-0 me-2">
                                        <Edit size={16} />
                                    </button>
                                    <button className="btn btn-link text-danger p-0">
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New User</h5>
                                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}>
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={newUser.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={newUser.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Role</label>
                                        <select
                                            className="form-select"
                                            name="role"
                                            value={newUser.role}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Role</option>
                                            <option value="pompist">Pompist</option>
                                            <option value="view">View</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Station</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="station"
                                            value={newUser.station}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>
                                    <Save className="me-2" size={16} /> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;