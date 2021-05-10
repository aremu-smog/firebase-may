import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      setError("");
      login(emailRef.current.value, passwordRef.current.value);
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setLoading(false);
      history.push("/");
    } catch {
      setError(`${emailRef.current.value}, ${passwordRef.current.value}`);
      setLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
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

            <Button disabled={loading} type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

Login.propTypes = {};

export default Login;
