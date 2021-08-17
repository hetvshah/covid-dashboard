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
      color: 'primary',
      chosenState: null,
      chosenCounty: null,
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
      this.state.states.data.map((state) => {
        if (state.state === this.props.label) {
          this.setState({
            cases: state.cases,
            deaths: state.deaths,
            chosenState: state,
          });
        }
        return null;
      });
    } else {
      // county
      const index = this.props.label.indexOf(',');
      const countyLabel = this.props.label.substring(0, index);
      const stateLabel = this.props.label.substring(
        index + 2,
        this.props.label.length
      );
      console.log(stateLabel);
      this.state.counties.data.map((county) => {
        if (county.county === countyLabel && county.state === stateLabel) {
          this.setState({
            cases: county.cases,
            deaths: county.deaths,
            chosenCounty: county,
          });
        }
        return null;
      });
    }
  }

  handleClick() {
    if (this.state.color === 'primary') {
      this.setState({ color: 'secondary' });
    } else {
      this.setState({ color: 'primary' });
    }
    if (this.state.chosenState !== null) {
      dispatch(createPost(this.state.chosenState));
    } else if (this.state.chosenCounty !== null)
      console.log(this.state.chosenState);
    console.log(this.state.chosenCounty);
  }

  render() {
    return (
      <div className="outer-container">
        <h2>{this.props.label}</h2>
        <p>Confirmed cases: {this.state.cases}</p>
        <p>Deaths: {this.state.deaths}</p>
        <AiFillPushpin
          className={this.state.color}
          onClick={() => {
            this.handleClick();
          }}
        />
      </div>
    );
  }
}
