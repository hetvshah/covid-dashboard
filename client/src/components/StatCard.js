import React, { Component } from 'react';
import { fetchStates, fetchCounties } from '../api/Request';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
// import { useState, useEffect } from 'react';

// const StatCard = (props) => {
//   const [states, setStates] = useState([]);
//   const [counties, setCounties] = useState([]);
//   const [cases, setCases] = useState(0);
//   const [deaths, setDeaths] = useState(0);
//   const [color, setColor] = useState('primary');
//   const [chosenState, setChosenState] = useState(null);
//   const [chosenCounty, setChosenCounty] = useState(null);

//   useEffect(() => {
//     async function fetch() {
//     setStates(await fetchStates())
//     setCounties(await fetchCounties())
//     }
//     fetch()
//     console.log(states)

//     if (props.label.indexOf(',') <= -1) {
//       // state
//       states.data.map((state) => {
//         if (state.state === props.label) {
//           setCases(state.cases)
//           setDeaths(state.deaths)
//           setChosenState(state)
//         }
//         return null;
//       });
//     } else {
//       // county
//       const index = props.label.indexOf(',');
//       const countyLabel = props.label.substring(0, index);
//       const stateLabel = props.label.substring(
//         index + 2,
//         props.label.length
//       );
//       console.log(stateLabel);
//       counties.data.map((county) => {
//         if (county.county === countyLabel && county.state === stateLabel) {
//           setCases(county.cases)
//           setDeaths(county.deaths)
//           setChosenCounty(county)
//         }
//         return null;
//       });
//     }
//   }, []);

//   function handleClick() {
//     if (color === 'primary') {
//       setColor('secondary')
//     } else {
//       setColor('primary')
//     }
//     if (chosenState !== null) {
//       // dispatch(createPost(this.state.chosenState));
//     } else if (chosenCounty !== null)
//       console.log(chosenState);
//     console.log(chosenCounty);
//   }

//   return (
//     <div className="outer-container">
//     {console.log(props.label)}
//       <h2>{props.label}</h2>

//       <p>Confirmed cases: {cases}</p>
//       <p>Deaths: {deaths}</p>
//       <AiFillPushpin
//         className={color}
//         onClick={() => {
//           handleClick();
//         }}
//       />
//     </div>
//   );
// };

// export default StatCard;

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

  handleClick(e) {
    if (this.state.color === 'primary') {
      this.setState({ color: 'secondary' });
    } else {
      this.setState({ color: 'primary' });
    }
    if (this.state.chosenState !== null) {
      const { dispatch } = this.props;
      dispatch(addPins(this.state.chosenState));
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
