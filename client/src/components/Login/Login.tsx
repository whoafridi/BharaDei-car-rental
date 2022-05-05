import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h2 className="fw-bold mt-3 mb-5 text-center">
        <em>Welcome to Login</em>
      </h2>
      <div className="row  d-flex align-items-center justify-content-center">
        <div className="col-md-7 col-sm-12">
          <img
            src="https://www.edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
            style={{ width: "100%" }}
            alt="none"
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <Form>
            <Form.Group controlId="formBasicEmail">
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
              className="rounded-pill mb-2"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <button className="btn btn-secondary rounded-pill mb-2">
            Google Sign In
          </button>
          <p>
            <em>Don't have an account?</em>
            <Link
              to="/registration"
              style={{ textDecoration: "none" }}
              className="ps-2"
            >
              <em>Registration</em>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
