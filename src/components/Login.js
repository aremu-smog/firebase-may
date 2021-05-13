import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login");
  };

  const emailRef = useRef();

  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={emailRef} type="email" />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-4">
              Login
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
