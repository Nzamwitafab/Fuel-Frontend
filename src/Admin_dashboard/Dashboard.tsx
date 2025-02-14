import { Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

const Dashboard = () => {
  const chartData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 40 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 45 },
    { month: 'Jul', value: 40 },
  ];

  return (
    <div className="container py-4">
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

      <div className="row">
        <div className="col-12">
          <RecentTransactionsTable />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <Card className="p-3 shadow-sm border-0">
            <h5 className="fw-semibold mb-3">Fuel Usage Trend</h5>
            <LineChart width={800} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;