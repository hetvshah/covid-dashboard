import React from 'react';
import { Layout } from '../components/Layout';

class Pins extends React.Component {
  constructor() {
    super();
    this.state = {
      pins: [],
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Pins</h1>
        </div>
      </Layout>
    );
  }
}

export default Pins;
