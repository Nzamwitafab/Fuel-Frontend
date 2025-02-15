import React from 'react';
import { Fuel, Calendar } from 'lucide-react';
import { Button, Card, Form } from 'react-bootstrap';

interface Transaction {
    date: string;
    time: string;
    plateNo: string;
    driver: string;
    fuelType: string;
    quantity: number;
    amount: number;
}

const ReportMain = () => {
    const transactions: Transaction[] = [
        {
            date: '2025-02-11',
            time: '09:30',
            plateNo: 'RAG 777 H',
            driver: 'KAMANZI Paul',
            fuelType: 'Petrol',
            quantity: 30,
            amount: 50000
        }
    ];

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "white",
                border: "1px solid skyblue",
                borderRadius: "20px",
                height: "100vh",
                margin: "0 auto",
                width: "90%"
            }}
        >
            <div className="d-flex flex-column align-items-center w-100">
                {/* Main Content */}
                <main className="p-4 w-100" style={{ maxWidth: "1200px" }}>
                    <div className="container-fluid">
                        {/* Filters Section */}
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="row g-4">
                                <div className="col-12 col-md-3">
                                    <label className="text-sm text-gray-500">Start Date</label>
                                    <Form.Control type="text" placeholder="mm/dd/yyyy" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <label className="text-sm text-gray-500">End Date</label>
                                    <Form.Control type="text" placeholder="mm/dd/yyyy" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <label className="text-sm text-gray-500">Fuel Type</label>
                                    <Form.Select defaultValue="petrol">
                                        <option value="petrol">Petrol</option>
                                        <option value="diesel">Diesel</option>
                                    </Form.Select>
                                </div>
                                <div className="col-12 col-md-3">
                                    <Button className="w-100 bg-blue-500 hover:bg-blue-600">Apply Filter</Button>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="row g-4 mt-4">
                            <div className="col-12 col-md-4">
                                <Card>
                                    <Card.Body className="d-flex align-items-center">
                                        <Fuel className="h-6 w-6 text-red-500" />
                                        <div className="ms-3">
                                            <p className="text-sm text-gray-500">Total Transactions</p>
                                            <p className="h4">156</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 col-md-4">
                                <Card>
                                    <Card.Body className="d-flex align-items-center">
                                        <Fuel className="h-6 w-6 text-blue-500" />
                                        <div className="ms-3">
                                            <p className="text-sm text-gray-500">Total Volume (L)</p>
                                            <p className="h4">428</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 col-md-4">
                                <Card>
                                    <Card.Body className="d-flex align-items-center">
                                        <Calendar className="h-6 w-6 text-blue-500" />
                                        <div className="ms-3">
                                            <p className="text-sm text-gray-500">Total Amount</p>
                                            <p className="h4">4,000,000 rwf</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        {/* Daily Fuel Consumption Chart */}
                        <Card className="mt-4">
                            <Card.Header>
                                <Card.Title>Daily Fuel Consumption</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {/* Chart component would go here */}
                            </Card.Body>
                        </Card>

                        {/* Recent Transactions */}
                        <Card className="mt-4">
                            <Card.Header>
                                <Card.Title>Recent Transactions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Date/Time</th>
                                                <th>Plate No.</th>
                                                <th>Driver</th>
                                                <th>Fuel Type</th>
                                                <th className="text-end">Quantity (L)</th>
                                                <th className="text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.map((transaction, index) => (
                                                <tr key={index}>
                                                    <td>{`${transaction.date} ${transaction.time}`}</td>
                                                    <td>{transaction.plateNo}</td>
                                                    <td>{transaction.driver}</td>
                                                    <td>{transaction.fuelType}</td>
                                                    <td className="text-end">{transaction.quantity}</td>
                                                    <td className="text-end">{transaction.amount.toLocaleString()} rwf</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-end mt-4">
                                    <Button variant="outline">Export</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReportMain;
