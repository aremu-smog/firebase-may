import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const history = useHistory();

  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      setErrorMessage("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setErrorMessage("Unable to log you in. Kindly try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          {errorMessage && <Alert>{errorMessage}</Alert>}
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={emailRef} type="email" />
            </Form.Group>
            <Form.Group className="mt-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-4"
              disabled={loading}
            >
              {loading ? "Hang on..." : "Login"}
            </Button>
          </Form>
          <p className="text-center mt-4">
            Forgot Password? <Link to="/reset-password">Reset Password</Link>
          </p>
        </Card.Body>
      </Card>
      <p className="text-center mt-4">
        Don't have an account yet? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {};

export default Login;
