import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Dark Store Network Planner</h1>
      <p>Optimize your dark store locations for fast deliveries.</p>
      <Link to="/dashboard">
        <button className="start-btn">Start Planning</button>
      </Link>
    </div>
  );
}

export default LandingPage;
