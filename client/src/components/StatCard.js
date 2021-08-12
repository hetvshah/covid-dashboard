import React, { Component } from 'react';
import { fetchStates, fetchCounties } from '../api/Request';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';

export default class StatCard extends Component {
  constructor() {
    super();
    this.state = {
      states: [],
      counties: [],
      cases: 0,
      deaths: 0,
    };
  }

  async componentDidMount() {
    const states = await fetchStates();
    const counties = await fetchCounties();

    this.setState({
      states: states,
      counties: counties,
    });

    if (this.props.label.indexOf(',') <= -1) {
      // state
      console.log(this.state.states);
      this.state.states.data.map((state) => {
        console.log('state');
        if (state.state === this.props.label) {
          this.setState({
            cases: state.cases,
            deaths: state.deaths,
          });
        }
        return null;
      });
    } else {
      // county
    }
  }

  render() {
    return (
      <div className="outer-container">
        <h2>{this.props.label}</h2>
        <p>Confirmed cases: {this.state.cases}</p>
        <p>Deaths: {this.state.deaths}</p>
        <AiFillPushpin className="icon" />
      </div>
    );
  }
}
