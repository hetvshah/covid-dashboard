import { fetchStates } from '../../api/Request';
// import { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import React from 'react';

class Stats extends React.Component {
  //   const [data, setData] = useState([]);

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await fetchStates();
    console.log(data);
  }

  render() {
    return <div></div>;
  }
}

export default Stats;
