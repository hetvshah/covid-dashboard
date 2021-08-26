import React from 'react';
import Input from '../components/LocationComponents/Input';
import { Layout } from '../components/Layout';
import { fetchStates, fetchCounties } from '../api/Request';

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
      states: [],
      counties: [],
      countiesArr: [],
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

    console.log('CHECKJKFLJDLKFJDLJ2');
    console.log(this.state.counties);

    const countiesArr = this.state.counties.data.map((county) => {
      return {
        value: county.county + ', ' + county.state,
        label: county.county + ', ' + county.state,
      };
    });

    this.setState({ statesArr: statesArr, countiesArr: countiesArr });

    // const countiesArr = [];

    // for (var i = 0; i < 501; i++) {
    //   const county = this.state.counties.data[i];
    //   countiesArr.push({
    //     value: county.county + ', ' + county.state,
    //     label: county.county + ', ' + county.state,
    //   });
    // }

    this.setState({
      options: [
        { label: 'states', options: statesArr },
        { label: 'counties', options: countiesArr },
      ],
    });
    console.log(this.state.options);
  }

  render() {
    console.log('CHECK');
    return (
      <Layout>
        <div>
          <h1>Add or View Location</h1>
          <Input
            states={this.state.states}
            counties={this.state.counties}
            options={this.state.options}
            countiesArr={this.state.countiesArr}
            statesArr={this.state.statesArr}
          />
        </div>
      </Layout>
    );
  }
}

export default Location;
