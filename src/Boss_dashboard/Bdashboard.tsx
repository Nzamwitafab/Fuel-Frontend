import React from 'react';
import { Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description }) => (
    <Card className="p-3 shadow-sm border-0">
        <div className="d-flex align-items-start gap-3 mb-3">
            <div className={`p-2 rounded bg-opacity-25 ${title === 'Total Vehicles' ? 'bg-warning' :
                title === 'Total Drivers' ? 'bg-primary' :
                    'bg-info'
                }`}>
                {icon}
            </div>
            <span className="text-secondary">{title}</span>
        </div>
        <div>
            <h3 className="fw-bold mb-1">{value}</h3>
            <span className="text-muted small">{description}</span>
        </div>
    </Card>
);

const RecentTransactionsTable = () => {
    const transactions = [
        { vehicle: 'RAC 771 H', driver: 'Kamanzi', station: 'KABEZA ESP', amount: 45, time: '10:30 AM' },
        { vehicle: 'RAD 000 B', driver: 'KAMALI', station: 'KABEZA ESP', amount: 30, time: '7:30 PM' },
        { vehicle: 'RAD 000 B', driver: 'Claude', station: 'ENGINE', amount: 60, time: '18:30 PM' },
    ];

    return (
        <Card className="p-3 shadow-sm border-0">
            <h5 className="fw-semibold mb-3">Recent Refueling Transactions</h5>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="text-secondary small">
                            <th>Vehicle</th>
                            <th>Driver</th>
                            <th>Station</th>
                            <th>Amount (L)</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className="small">
                        {transactions.map((tx, idx) => (
                            <tr key={idx} className="border-top">
                                <td>{tx.vehicle}</td>
                                <td>{tx.driver}</td>
                                <td>{tx.station}</td>
                                <td>{tx.amount}</td>
                                <td>{tx.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

const Bdashboard = () => {

    const fuelData = [
        { day: 'Sun', petrol: 20, diesel: 30 },
        { day: 'Mon', petrol: 50, diesel: 40 },
        { day: 'Tue', petrol: 80, diesel: 70 },
        { day: 'Wed', petrol: 60, diesel: 90 },
        { day: 'Thu', petrol: 40, diesel: 50 },
        { day: 'Fri', petrol: 90, diesel: 80 },
        { day: 'Sat', petrol: 100, diesel: 100 },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div style={{ width: '80%', marginLeft: '15%' }}>
                <div className="p-4">
                    <div className="row g-4 mb-4">
                        <div className="col-md-4">
                            <StatCard title="Total Vehicles" value={12} icon="🚗" description="Active in system" />
                        </div>
                        <div className="col-md-4">
                            <StatCard title="Total Drivers" value={5} icon="👤" description="Registered drivers" />
                        </div>
                        <div className="col-md-4">
                            <StatCard title="Today's Refuels" value={5} icon="⛽" description="Transactions today" />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12">
                            <RecentTransactionsTable />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bdashboard;