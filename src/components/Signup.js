import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (passwordRef.current.value === passwordAgainRef.current.value) {
      try {
        setErrorMessage("");
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push("/login");
      } catch {
        setErrorMessage("Failed to sign you up. Kindly try again");
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMessage("Password mismatch");
      setLoading(false);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();
  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          {errorMessage && (
            <Alert variant="danger" dismissible>
              {errorMessage}
            </Alert>
          )}
          <h2 className="text-center mb-4">Signup</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={emailRef} type="email" />
            </Form.Group>
            <Form.Group className="mt-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" />
            </Form.Group>
            <Form.Group className="mt-2" controlId="passwordAgain">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control ref={passwordAgainRef} type="password" />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-100 mt-4"
            >
              {loading ? "Hang on..." : "Sign up"}
            </Button>
          </Form>
          <p className="text-center mt-4">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
