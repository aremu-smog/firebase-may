import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Sign up");
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();
  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
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
            <Button type="submit" variant="primary" className="w-100 mt-4">
              Sign up
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
