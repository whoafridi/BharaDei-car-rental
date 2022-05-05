import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-3 text-center">
        <em>Welcome to Registration!</em>
      </h2>
      <div className="row  d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4489363-3723270.png"
            alt="none"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <Form noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="ps-2">Enter name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  className="rounded-pill"
                  name="name"
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="ps-2">Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="ps-2">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  className="rounded-pill"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="rounded-pill mb-2"
            >
              Registration
            </Button>
          </Form>
          <p>
            <em>Already have an account?</em>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="ps-2"
            >
              <em>Login</em>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
