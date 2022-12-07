import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const Sign = () => {
  const selectedBody = document.body.classList.add(
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'min-vh-100',
  );
  return (
    <Container className="d-flex ">
      <Form className="text-center " style={{ width: '330px' }}>
        <img
          className="mb-4"
          style={{ heigt: '72px', width: '72px' }}
          src="https://www.svgrepo.com/show/104000/flaming-football.svg"
          alt="Soccer bet logo"
        />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            type="email"
            size="lg"
            placeholder="Email Address"
            autoComplete="username"
            className="position-relative mb-1"
          />
        </Form.Group>
        <Form.Group controlId="sign-in-password">
          <Form.Control
            type="password"
            size="lg"
            placeholder="Password"
            autoComplete="current-password"
            className="position-relative mb-3"
          />
        </Form.Group>
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">
            Sign in
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Sign;
