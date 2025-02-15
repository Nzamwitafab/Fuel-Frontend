import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DriverManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [drivers] = useState([
        { name: 'NShuti Alain', email: 'alain@gmail.com', phone: '+250785206973', license: 'RAC 750 G', status: 'Active' },
        { name: 'Keza Valiante', email: 'valiante@gmail.com', phone: '+250785206973', license: 'RAC 750 G', status: 'Inactive' },
        { name: 'Kamali Olivier', email: 'olivier@gmail.com', phone: '+250785206973', license: 'RAC 750 G', status: 'Active' },
        { name: 'KaraKe Bertarand', email: 'bertarand2@gmail.com', phone: '+250785206973', license: 'RAC 750 G', status: 'Active' }
    ]);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="container py-4">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <input type="text" className="form-control w-50" placeholder="Search Driver Name" />
                <select className="form-select w-25">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
                <button className="btn btn-primary" onClick={toggleModal}>+ Add Driver</button>
            </header>

            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {drivers.map((driver, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{driver.name}</h5>
                                    <p className="mb-0">{driver.email}</p>
                                    <p className="mb-0">{driver.phone}</p>
                                    <p className="mb-0">{driver.license}</p>
                                </div>
                                <span className={`badge ${driver.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>●</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Driver</h5>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input type="text" placeholder="Enter driver name" className="form-control mb-3" />
                                    <input type="email" placeholder="Enter His or Her Email" className="form-control mb-3" />
                                    <input type="text" placeholder="Enter Telephone number" className="form-control mb-3" />
                                    <input type="text" placeholder="Enter License number" className="form-control mb-3" />
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option>Assign Vehicle</option>
                                            <option>RAB00C</option>
                                            <option>RAG900G</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={toggleModal}>Cancel</button>
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DriverManagement;