import React from 'react';

class Pins extends React.Component {
  constructor() {
    super();
    this.state = {
      pins: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Pins</h1>
      </div>
    );
  }
}

export default Pins;
