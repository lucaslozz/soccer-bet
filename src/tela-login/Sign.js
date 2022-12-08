import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Sign = () => {
  return (
    <Container className="d-flex ">
      <Form className="text-center " style={{ width: '330px' }}>
        <img
          className="mb-2"
          style={{ heigt: '72px', width: '72px' }}
          src="https://www.svgrepo.com/show/104000/flaming-football.svg"
          alt="Soccer bet logo"
        />
        <h1 className="mb-3 fs-3 fw-normal">Sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Label className="fs-5 d-flex justify-content-start">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            size="lg"
            placeholder="Enter email address"
            autoComplete="username"
            className="position-relative mb-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password">
          <Form.Label className="fs-5 d-flex justify-content-start">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            size="lg"
            placeholder="Enter password"
            autoComplete="current-password"
            className="position-relative mb-3"
          />
        </Form.Group>

        <Form.Group
          className="d-flex justify-content-between mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
          <a style={{ textDecoration: 'none' }} href="/">
            Forgot password?
          </a>
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" size="lg" className="mb-2">
            Sign in
          </Button>
          <p>
            Don't have an account?{' '}
            <a style={{ textDecoration: 'none' }} href="/">
              Sign up
            </a>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default Sign;
