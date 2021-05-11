import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");

  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("There was an error login you out. Kindly try again");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <b>Email:</b>
            {currentUser.email}
          </p>
          <Link to="/update" className="btn btn-primary w-100">
            Update
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
