import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Manage your dark stores efficiently.</p>
      <Link to="/map">
        <button className="btn">View Map</button>
      </Link>
      <Link to="/reports">
        <button className="btn">View Reports</button>
      </Link>
    </div>
  );
}

export default Dashboard;
