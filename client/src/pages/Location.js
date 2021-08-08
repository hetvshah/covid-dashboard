import React from 'react';
import Input from '../components/LocationComponents/Input';
import Stats from '../components/LocationComponents/Stats';

class Location extends React.Component {
  render() {
    return (
      <div>
        <h1>Add or View Location Stats</h1>
        <Input />
        <Stats />
      </div>
    );
  }
}

export default Location;
