import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, currentUser } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setError("Passwords must match!");
    } else {
      setLoading(true);
      try {
        setError("");
        signup(emailRef.current.value, passwordRef.current.value);
        emailRef.current.value = "";
        passwordRef.current.value = "";
        passwordConfirmationRef.current.value = "";
      } catch {
        setError(`${emailRef.current.value}, ${passwordRef.current.value}`);
      }

      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser && currentUser.email}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                required
                ref={passwordConfirmationRef}
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </>
  );
}
