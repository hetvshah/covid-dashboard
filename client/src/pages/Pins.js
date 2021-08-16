import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

class Pins extends React.Component {
  constructor() {
    super();
    this.state = {
      pins: [],
      user: JSON.parse(localStorage.getItem('profile')),
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Pins</h1>
          {this.state.user === null ? (
            <div>
              <Link to="/signup">Sign up</Link> or{' '}
              <Link to="/login">log in</Link> to make and view pins.
            </div>
          ) : (
            ''
          )}
        </div>
      </Layout>
    );
  }
}

export default Pins;
