import React, { useState } from 'react';
import { Check, Search, Calendar } from 'lucide-react';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const VehicleRefuelingValidation: React.FC = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [isEligible, setIsEligible] = useState(false);

    const handleValidation = () => {
        setIsEligible(true); // Mock validation
    };

    return (
        <div className="container py-4">
            <Card className="p-4 mb-4">
                <h2 className="mb-3">Vehicle Refueling Validation</h2>
                <div className="d-flex gap-3">
                    <Form.Control
                        type="text"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        placeholder="Enter Vehicle Number"
                    />
                    <Button onClick={handleValidation}>Validate Vehicle</Button>
                </div>
                {isEligible && (
                    <div className="mt-3 p-3 border rounded bg-success text-white d-flex align-items-center gap-2">
                        <Check />
                        <span>Vehicle is eligible for refueling</span>
                    </div>
                )}
            </Card>

            <Card className="p-4 mb-4">
                <h3 className="mb-2">Vehicle Details</h3>
                <p><strong>Vehicle:</strong> Toyota Camry</p>
                <p><strong>Driver:</strong> Muhinda Kevin</p>
                <p><strong>Fuel Type:</strong> Petrol</p>
                <p><strong>Last Refuel:</strong> 02/09/2025 at 12:01 pm</p>
            </Card>

            <Card className="p-4">
                <h3 className="mb-3">Fuel Transactions History</h3>
                <div className="d-flex gap-3 mb-3">
                    <Form.Control placeholder="Search Transaction History" />
                    <Form.Control placeholder="All Station" className="w-25" />
                    <Form.Control placeholder="mm/dd/yy" className="w-25" />
                    <Calendar className="text-muted mt-2" />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Vehicle</th>
                            <th>Driver</th>
                            <th>Station</th>
                            <th>Fuel Type</th>
                            <th>Quantity (L)</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2025-02-09 09:30</td>
                            <td>RAC 750 G</td>
                            <td>M. Kevin</td>
                            <td>KABEZA Station</td>
                            <td className="text-success">Petrol</td>
                            <td>45</td>
                            <td>55,000 RWF</td>
                            <td className="text-success">Completed</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default VehicleRefuelingValidation;