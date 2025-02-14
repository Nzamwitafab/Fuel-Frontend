import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Edit, Trash2 } from 'lucide-react';

const VehicleManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vehicles, setVehicles] = useState([
        { plate: 'RAC 771 H', fuel: 'Petrol', driver: 'Fabrice', contact: '+250785206973', status: 'Active' },
        { plate: 'RAD 008 G', fuel: 'Diesel', driver: 'Jane Smith', contact: '+1234567891', status: 'Active' }
    ]);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="container py-4">
            <header className="d-flex justify-content-between align-items-center mb-4">
                <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search for Vehicle by Plate Number"
                />
                <button className="btn btn-primary" onClick={toggleModal}>+ Add New Vehicle</button>
            </header>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Plate Number</th>
                                <th>Fuel Type</th>
                                <th>Driver Info</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.map((vehicle, index) => (
                                <tr key={index}>
                                    <td>{vehicle.plate}</td>
                                    <td>
                                        <span className={`badge ${vehicle.fuel === 'Petrol' ? 'bg-success' : 'bg-info'}`}>{vehicle.fuel}</span>
                                    </td>
                                    <td>{vehicle.driver}<br />{vehicle.contact}</td>
                                    <td><span className="badge bg-success">{vehicle.status}</span></td>
                                    <td>
                                        <button className="btn btn-link p-0 me-2">
                                            <Edit size={16} />
                                        </button>
                                        <button className="btn btn-link text-danger p-0">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Vehicle</h5>
                                <button type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Enter vehicle name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Enter Plate Number" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option>Select fuel type</option>
                                            <option>Diesel</option>
                                            <option>Petrol</option>
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

export default VehicleManagement;
