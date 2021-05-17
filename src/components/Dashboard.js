import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const logUserOut = async () => {
    setLoading(true);
    try {
      setErrorMessage("");
      await logout();
      history.push("/login");
    } catch {
      setErrorMessage("We are unable to sign you out for some reason");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        {errorMessage && (
          <Alert variant="danger" dismissible>
            {errorMessage}
          </Alert>
        )}
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>

          <p>
            Email <strong>{currentUser.email}</strong>
          </p>
          <Link to="/update-profile" className="btn btn-primary w-100">
            Update Profile
          </Link>
          <Button
            disabled={loading}
            className="w-100 mt-4"
            variant="outline-primary"
            onClick={logUserOut}
          >
            {loading ? "Hang on..." : "Logout"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
