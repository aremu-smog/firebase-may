import React, { useState, useRef } from "react";
import { Card, Alert, Button, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { resetPassword } = useAuth();
  const emailRef = useRef();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      setError("");
      setMessage("");
      await resetPassword(emailRef.current.value);
      setMessage("Kindly check your email for your password reset link");
      emailRef.current.value = "";
      setLoading(false);
    } catch {
      setError("Failed to reset password. Try again");
      setMessage("");
      setLoading(false);
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handlePasswordReset}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>

            <Button disabled={loading} type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPassword;
