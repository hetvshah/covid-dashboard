import React, { Component } from 'react';
import Select, { createFilter } from 'react-select';
import { fetchStates, fetchCounties } from '../../api/Request';
import StatCard from '../StatCard';

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      selectedOption: null,
      states: [],
      counties: [],
    };
  }

  async componentDidMount() {
    this.setState({
      states: await fetchStates(),
      counties: await fetchCounties(),
    });
    const statesArr = this.state.states.data.map((state) => {
      return { value: state.state, label: state.state };
    });

    const countiesArr = [];

    for (var i = 0; i < 501; i++) {
      const county = this.state.counties.data[i];
      countiesArr.push({
        value: county.county + ', ' + county.state,
        label: county.county + ', ' + county.state,
      });
    }

    this.setState({
      options: [
        { label: 'states', options: statesArr },
        { label: 'counties', options: countiesArr },
      ],
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    if (this.state.selectedOption !== null) {
      const stats = this.state.selectedOption.map((option) => {
        return (
          <StatCard
            label={option.label}
            states={this.state.states}
            counties={this.state.counties}
          />
        );
      });
      return (
        <div>
          <Select
            options={this.state.options}
            onChange={this.handleChange}
            filterOption={createFilter({ ignoreAccents: false })}
            isMulti
          />
          <div
            style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}
          >
            {stats}
          </div>
        </div>
      );
    }

    return (
      <div>
        <Select
          options={this.state.options}
          onChange={this.handleChange}
          filterOption={createFilter({ ignoreAccents: false })}
          isMulti
        />
      </div>
    );
  }
}

export default Input;
