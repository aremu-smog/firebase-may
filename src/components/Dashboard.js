import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>

          <p>
            Email <strong>{currentUser.email}</strong>
          </p>
          <Link to="/update-profile" className="btn btn-primary w-100">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
