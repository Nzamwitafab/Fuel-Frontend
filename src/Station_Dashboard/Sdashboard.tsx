import React from "react";
import { Card } from "react-bootstrap";
import { FaGasPump, FaSearch } from "react-icons/fa";

const DashboardMain: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#EDEDED", border: "1px solid skyblue", borderRadius: "20px", height: "100vh", margin: "0 auto", width: "90%" }}
    >
      <div className="container-fluid p-4">
        {/* Top Stats Section */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <Card className="p-3 shadow-sm border-0 text-center">
              <FaGasPump size={24} className="text-danger mx-auto mb-2" />
              <h6 className="text-secondary">To day Refuels</h6>
              <h3 className="fw-bold">22</h3>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="p-3 shadow-sm border-0 text-center">
              <FaGasPump size={24} className="text-info mx-auto mb-2" />
              <h6 className="text-secondary">Total Liters(Diesel)</h6>
              <h3 className="fw-bold">150 L</h3>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="p-3 shadow-sm border-0 text-center">
              <FaGasPump size={24} className="text-info mx-auto mb-2" />
              <h6 className="text-secondary">Total Liters(Petrol)</h6>
              <h3 className="fw-bold">150 L</h3>
            </Card>
          </div>
        </div>

        {/* Vehicle Search */}
        <Card className="p-3 shadow-sm border-0 mb-4">
          <h6 className="fw-semibold">Vehicle Search</h6>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Vehicle Plate"
            />
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-3 shadow-sm border-0">
          <h6 className="fw-semibold">Recent Activity</h6>
          <div className="list-group list-group-flush">
            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
              <div>
                <h6 className="mb-0">RAC 750 H</h6>
                <small className="text-muted">45 Liters-Diesel</small>
              </div>
              <small className="text-muted">2 Hours Ago</small>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
              <div>
                <h6 className="mb-0">RAC 000 H</h6>
                <small className="text-muted">45 Liters-Petrol</small>
              </div>
              <small className="text-muted">2 Hours Ago</small>
            </div>
            <div className="list-group-item d-flex justify-content-between align-items-center px-0">
              <div>
                <h6 className="mb-0">RAC 001 H</h6>
                <small className="text-muted">45 Liters-Petrol</small>
              </div>
              <small className="text-muted">2 Hours Ago</small>
            </div>
          </div>

          {/* Pagination */}
          <nav className="mt-3">
            <ul className="pagination pagination-sm justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">‹</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item disabled">
                <a className="page-link" href="#">...</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">40</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">›</a>
              </li>
            </ul>
          </nav>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMain;
