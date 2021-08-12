import React from 'react';
import Input from '../components/LocationComponents/Input';
import { Layout } from '../components/Layout';

class Location extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Add or View Location</h1>
          <Input />
        </div>
      </Layout>
    );
  }
}

export default Location;
