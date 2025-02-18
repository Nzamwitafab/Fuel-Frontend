import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Table, Pagination } from 'react-bootstrap';

const fuelData = [
    { day: 'Sun', petrol: 20, diesel: 30 },
    { day: 'Mon', petrol: 50, diesel: 40 },
    { day: 'Tue', petrol: 80, diesel: 70 },
    { day: 'Wed', petrol: 60, diesel: 90 },
    { day: 'Thu', petrol: 40, diesel: 50 },
    { day: 'Fri', petrol: 90, diesel: 80 },
    { day: 'Sat', petrol: 100, diesel: 100 },
];

const stationData = [
    { name: 'Kabeza Station', value: 35, color: '#228B22' },
    { name: 'Remera Station', value: 35, color: '#FFD700' },
    { name: 'Kicukiro Station', value: 20, color: '#1E90FF' },
];

const Breport = () => {
    const [activeTab, setActiveTab] = useState('Fuel Usage');

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-center gap-3 mb-4">
                <Button variant={activeTab === 'Fuel Usage' ? 'primary' : 'outline-primary'} onClick={() => setActiveTab('Fuel Usage')}>Fuel Usage</Button>
                <Button variant={activeTab === 'Station Analysis' ? 'primary' : 'outline-primary'} onClick={() => setActiveTab('Station Analysis')}>Station Analysis</Button>
            </div>
            {activeTab === 'Fuel Usage' ? (
                <>
                    <div className="row row-cols-1 row-cols-md-4 g-3 mb-4">
                        <div className="col"><Card className="p-3"><h5>Today's Fuel Consumption</h5><p className="fs-4 fw-bold">2,850 L</p><span className="text-success">+12.5% from yesterday</span></Card></div>
                        <div className="col"><Card className="p-3"><h5>Total Cost</h5><p className="fs-4 fw-bold">1,000,000 RWF</p><span className="text-success">+12.5% from yesterday</span></Card></div>
                        <div className="col"><Card className="p-3"><h5>Avg. Price/Liter</h5><p className="fs-4 fw-bold">2,000 RWF</p><span className="text-danger">-2.1% from yesterday</span></Card></div>
                        <div className="col"><Card className="p-3"><h5>Transactions</h5><p className="fs-4 fw-bold">324</p><span className="text-success">+5.2% from yesterday</span></Card></div>
                    </div>
                    <h2 className="text-center mb-4">Daily Fuel Consumption</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={fuelData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="petrol" stroke="#32CD32" name="Petrol" />
                            <Line type="monotone" dataKey="diesel" stroke="#6A0DAD" name="Diesel" />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            ) : (
                <>
                    <h2 className="text-center mb-4">Station Usage Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={stationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                {stationData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Station</th>
                                <th>Transactions</th>
                                <th>Total Volume</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kabeza Station</td>
                                <td>98</td>
                                <td>712.5 L</td>
                                <td>1,400,000 RWF</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Pagination className="d-flex justify-content-center mt-3">
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{40}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </>
            )}
        </div>
    );
};

export default Breport;
