import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Station {
    name: string;
    location: string;
    managerName: string;
    managerPhone: string;
    managerEmail: string;
}

interface StationCardProps {
    station: {
        name: string;
        location: string;
        phone: string;
        email: string;
    };
    onEdit: () => void;
    onDelete: () => void;
}

const StationCard: React.FC<StationCardProps> = ({ station, onEdit, onDelete }) => (
    <div className="p-4 border rounded bg-white shadow-sm mb-4">
        <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-4">
                <div className="w-12 h-12 bg-warning rounded d-flex align-items-center justify-content-center">
                    <span className="text-2xl">🚂</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{station.name}</h3>
                    <div className="text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <span>📍</span> {station.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span> {station.phone}
                        </div>
                        <div className="flex items-center gap-2">
                            <span>✉️</span> {station.email}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={onEdit} className="btn btn-outline-primary btn-sm">✏️</button>
                <button onClick={onDelete} className="btn btn-outline-danger btn-sm">🗑️</button>
            </div>
        </div>
    </div>
);

const StationManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<Station>({
        name: '',
        location: '',
        managerName: '',
        managerPhone: '',
        managerEmail: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsModalOpen(false);
        setFormData({
            name: '',
            location: '',
            managerName: '',
            managerPhone: '',
            managerEmail: '',
        });
    };

    const sampleStations = [
        { name: 'KABEZA Station', location: 'KG 271', phone: '+250785206973', email: 'john@gmail.com' },
        { name: 'Remera Station', location: 'KG 271', phone: '+250785206973', email: 'john@gmail.com' }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Main content container with matching header dimensions */}
            <div style={{ width: '80%', marginLeft: '15%' }}>
                <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h1 className="text-2xl font-bold">Station Management</h1>
                            <p className="text-gray-600">Manage your fuel stations</p>
                        </div>
                        <Button variant="dark" onClick={() => setIsModalOpen(true)}>Add New Station</Button>
                    </div>

                    <div className="grid gap-4">
                        {sampleStations.map((station, index) => (
                            <StationCard
                                key={index}
                                station={station}
                                onEdit={() => console.log('Edit:', station)}
                                onDelete={() => console.log('Delete:', station)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Station</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Station Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                            <Button type="submit" variant="dark">Save Station</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default StationManagement;