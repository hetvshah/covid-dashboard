import { Card, Button, Form, Alert, Container } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../api/API';

const Signup = () => {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  //   const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match.');
    }

    const state = {
      // name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: passwordConfirmRef.current.value,
    };

    // dispatch(signup(formData, history));

    try {
      setError('');
      setLoading(true);
      const { data } = await api.signup(state);
      dispatch({ type: 'AUTH', data });
      history.push('/');
    } catch (err) {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h1 className="product-name">COVID-19 Dashboard</h1>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              {/* <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" ref={nameRef} required></Form.Control>
              </Form.Group> */}
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  ref={passwordConfirmRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                type="Submit"
                className="w-100"
                style={{ backgroundColor: 'black' }}
              >
                Sign Up
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <div style={{ fontSize: '1.2rem', color: 'darkgray' }}>OR</div>
              <div style={{ paddingTop: '1rem' }}>
                <Link to="/">Continue as a Guest</Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
