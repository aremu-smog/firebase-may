import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault("Password Reset");
  };
  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control ref={emailRef} type="email" />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 mt-4">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="text-center mt-4">
        <Link to="/signup">Login</Link>
      </p>
    </div>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
