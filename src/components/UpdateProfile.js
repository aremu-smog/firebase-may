import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { currentUser, updatePassword, updateEmail } = useAuth();

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const promises = [];
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value !== "") {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setErrorMessage("");
        history.push("/");
      })
      .catch(() => {
        setErrorMessage("Unable to update your details. Kindly try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div style={{ minWidth: "400px" }}>
      <Card className="w-100">
        <Card.Body>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <h2 className="text-center mb-4">Update Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group className="mt-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-100 mt-4"
            >
              {loading ? "Hang on... " : "Update Profile"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="text-center mt-4">
        <Link to="/">Cancel</Link>
      </p>
    </div>
  );
};

export default UpdateProfile;
