import React, { useEffect, useState } from "react";
import { Card, Spinner, Container, Row, Col, Form, Pagination } from "react-bootstrap";
import { FaGasPump, FaSearch } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

interface Transaction {
  id: string;
  total_litres: number;
  fuel_type: string;
  createdAt: string;
  Vehicle: {
    plateNumber: string;
  };
}

const DashboardMain: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalRefuels, setTotalRefuels] = useState<number>(0);
  const [totalDieselLiters, setTotalDieselLiters] = useState<number>(0);
  const [totalPetrolLiters, setTotalPetrolLiters] = useState<number>(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const decodedToken: { id: string } = jwtDecode(accessToken);
        const userId = decodedToken.id;

        const response = await fetch(`http://localhost:5000/api/fuel-transactions/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data: Transaction[] = await response.json();
        setTransactions(data);

        // Calculate totals
        const totalRefuels = data.length;
        const totalDiesel = data
          .filter((transaction) => transaction.fuel_type.toLowerCase() === "diesel")
          .reduce((sum, transaction) => sum + transaction.total_litres, 0);
        const totalPetrol = data
          .filter((transaction) => transaction.fuel_type.toLowerCase() === "petrol")
          .reduce((sum, transaction) => sum + transaction.total_litres, 0);

        setTotalRefuels(totalRefuels);
        setTotalDieselLiters(totalDiesel);
        setTotalPetrolLiters(totalPetrol);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid className="py-4">
      <Row className="g-4 mb-4">
        {/* Top Stats Section */}
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3">
            <FaGasPump size={24} className="text-danger mx-auto mb-2" />
            <h6 className="text-secondary">Today Refuels</h6>
            <h3 className="fw-bold">{totalRefuels}</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3">
            <FaGasPump size={24} className="text-info mx-auto mb-2" />
            <h6 className="text-secondary">Total Liters (Diesel)</h6>
            <h3 className="fw-bold">{totalDieselLiters.toFixed(2)} L</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3">
            <FaGasPump size={24} className="text-info mx-auto mb-2" />
            <h6 className="text-secondary">Total Liters (Petrol)</h6>
            <h3 className="fw-bold">{totalPetrolLiters.toFixed(2)} L</h3>
          </Card>
        </Col>
      </Row>

      {/* Vehicle Search */}
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <h6 className="fw-semibold mb-3">Vehicle Search</h6>
          <Form>
            <Form.Group className="input-group">
              <Form.Control type="text" placeholder="Enter Vehicle Plate" />
              <span className="input-group-text">
                <FaSearch />
              </span>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h6 className="fw-semibold mb-3">Recent Activity</h6>
          <div className="list-group list-group-flush">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                <div>
                  <h6 className="mb-0">{transaction.Vehicle.plateNumber}</h6>
                  <small className="text-muted">{transaction.total_litres} Liters - {transaction.fuel_type}</small>
                </div>
                <small className="text-muted">{new Date(transaction.createdAt).toLocaleTimeString()}</small>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{40}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DashboardMain;