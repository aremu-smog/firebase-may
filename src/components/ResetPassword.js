import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault("");

    setLoading(true);

    try {
      setErrorMessage("");
      await resetPassword(emailRef.current.value);
      history.push("/login");
    } catch (error) {
      console.log(error);
      setErrorMessage("Unable to reset your password. Kindly try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <h2 className="text-center mb-4">Password Reset</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={emailRef} type="email" />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-100 mt-4"
            >
              {loading ? "Hang on..." : "Reset Password"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="text-center mt-4">
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
