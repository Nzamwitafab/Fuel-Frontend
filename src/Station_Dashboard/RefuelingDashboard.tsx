import React from "react";
import { FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const RefuelingDashboard: React.FC = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "#EDEDED",
                border: "1px solid skyblue",
                borderRadius: "20px",
                height: "100vh",
                margin: "0 auto",
                width: "90%"
            }}
        >
            <div className="container d-flex justify-content-center">
                <div className="col-lg-8 col-md-10 bg-white rounded-3 shadow p-4">
                    {/* Check Vehicle Refueling Status */}
                    <div className="mb-4 border rounded-3 p-3">
                        <h4 className="mb-3">Check Vehicle Refueling Status</h4>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter Vehicle Plate"
                                className="form-control"
                            />
                            <button className="btn btn-outline-secondary" type="button">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    {/* Driver Information */}
                    <div className="mb-4 border rounded-3 p-3">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <h6 className="fw-bold">Driver Name</h6>
                                <p>KABANO Festo</p>
                            </div>
                            <div className="col-md-6 mb-2">
                                <h6 className="fw-bold">Contact Number</h6>
                                <p>+250785206973</p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-bold">Fuel Type</h6>
                                <p>Diesel</p>
                            </div>
                        </div>
                    </div>

                    {/* Record Fuel Replenishment */}
                    <div className="border rounded-3 p-3">
                        <h4 className="mb-3">Record Fuel Replenishment</h4>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Plate Number</label>
                                    <input
                                        type="text"
                                        value="RAC 750 H"
                                        disabled
                                        className="form-control bg-light"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Fuel Type</label>
                                    <input
                                        type="text"
                                        value="Diesel"
                                        disabled
                                        className="form-control bg-light"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Quantity (Liters)</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Quantity"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Unit Price</label>
                                    <input
                                        type="text"
                                        value="1600 rwf"
                                        disabled
                                        className="form-control bg-light"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold">Total Amount</label>
                                    <input
                                        type="text"
                                        placeholder="Calculated Amount"
                                        disabled
                                        className="form-control bg-light"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button className="btn btn-outline-secondary">Cancel</button>
                                <button className="btn btn-primary">Record Fuel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefuelingDashboard;
