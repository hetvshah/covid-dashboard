import { Card, Button, Form, Alert, Container } from 'react-bootstrap';
import { useRef, useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
// import Footer from '../Footer';
import './Auth.css';
// import { useDispatch } from 'react-redux';
import * as api from '../api/Auth';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formData, setFormData] = useState(initialState);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    const state = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    setFormData(state);

    // dispatch(signin(formData, history));

    try {
      setError('');
      setLoading(true);
      // const { data } =
      await api.login(formData);
      // dispatchEvent({ type: 'AUTH', data });
      // await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
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
            <h2 className="initial-header text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                type="Submit"
                className="w-100"
                style={{ backgroundColor: 'black' }}
              >
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
