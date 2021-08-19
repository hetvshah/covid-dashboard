import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { addPins } from '../actions/pins';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const StatCard = (props) => {
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [color, setColor] = useState('primary');
  const [chosenState, setChosenState] = useState(null);
  const [chosenCounty, setChosenCounty] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.label.indexOf(',') <= -1) {
      // state
      props.states.data.map((state) => {
        if (state.state === props.label) {
          setCases(state.cases);
          setDeaths(state.deaths);
          setChosenState(state);
        }
        return null;
      });
    } else {
      // county
      const index = props.label.indexOf(',');
      const countyLabel = props.label.substring(0, index);
      const stateLabel = props.label.substring(index + 2, props.label.length);
      console.log(stateLabel);
      props.counties.data.map((county) => {
        if (county.county === countyLabel && county.state === stateLabel) {
          setCases(county.cases);
          setDeaths(county.deaths);
          setChosenCounty(county);
        }
        return null;
      });
    }
  }, [props.counties.data, props.states.data, props.label]);

  function handleClick() {
    if (color === 'primary') {
      setColor('secondary');
    } else {
      setColor('primary');
    }
    console.log(chosenCounty);
    console.log(chosenState);
    if (chosenCounty !== null) {
      const info = {
        county: this.state.chosenCounty.county,
        state: this.state.chosenCounty.state,
        cases: this.state.chosenCounty.cases,
        deaths: this.state.chodenCounty.deaths,
      };
      dispatch(addPins(info));
    } else if (chosenState !== null) {
      const info = {
        county: this.state.chosenCounty.county,
        state: this.state.chosenCounty.state,
        cases: this.state.chosenCounty.cases,
        deaths: this.state.chodenCounty.deaths,
      };
      dispatch(addPins(info));
    }
  }

  return (
    <div className="outer-container">
      {console.log(props.label)}
      <h2>{props.label}</h2>

      <p>Confirmed cases: {cases}</p>
      <p>Deaths: {deaths}</p>
      <AiFillPushpin
        className={color}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
};

export default StatCard;

// export default class StatCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       states: [],
//       counties: [],
//       cases: 0,
//       deaths: 0,
//       color: 'primary',
//       chosenState: null,
//       chosenCounty: null,
//     };
//   }

//   async componentDidMount() {
//     const states = await fetchStates();
//     const counties = await fetchCounties();

//     this.setState({
//       states: states,
//       counties: counties,
//     });

//     if (this.props.label.indexOf(',') <= -1) {
//       // state
//       this.state.states.data.map((state) => {
//         if (state.state === this.props.label) {
//           this.setState({
//             cases: state.cases,
//             deaths: state.deaths,
//             chosenState: state,
//           });
//         }
//         return null;
//       });
//     } else {
//       // county
//       const index = this.props.label.indexOf(',');
//       const countyLabel = this.props.label.substring(0, index);
//       const stateLabel = this.props.label.substring(
//         index + 2,
//         this.props.label.length
//       );
//       console.log(stateLabel);
//       this.state.counties.data.map((county) => {
//         if (county.county === countyLabel && county.state === stateLabel) {
//           this.setState({
//             cases: county.cases,
//             deaths: county.deaths,
//             chosenCounty: county,
//           });
//         }
//         return null;
//       });
//     }
//   }

// handleClick() {
//   if (this.state.color === 'primary') {
//     this.setState({ color: 'secondary' });
//   } else {
//     this.setState({ color: 'primary' });
//   }
//   console.log(this.state.chosenCounty);
//   console.log(this.state.chosenState);
//   if (this.state.chosenCounty !== null) {
//     // const info = {
//     //   county: this.state.chosenCounty.county,
//     //   state: this.state.chosenCounty.state,
//     //   cases: this.state.chosenCounty.cases,
//     //   deaths: this.state.chodenCounty.deaths,
//     // };
//     const { dispatch } = this.props;
//     dispatch(addPins(this.state.chosenCounty));
//   } else if (this.state.chosenState !== null) {
//     const { dispatch } = this.props;
//     dispatch(addPins(this.state.chosenState));
//     // const info = {
//     //   state: this.state.chosenCounty.state,
//     //   cases: this.state.chosenCounty.cases,
//     //   deaths: this.state.chodenCounty.deaths,
//     // };
//   }
// }

//   render() {
//     return (
//       <div className="outer-container">
//         <h2>{this.props.label}</h2>
//         <p>Confirmed cases: {this.state.cases}</p>
//         <p>Deaths: {this.state.deaths}</p>
//         <AiFillPushpin
//           className={this.state.color}
//           onClick={() => {
//             this.handleClick();
//           }}
//         />
//       </div>
//     );
//   }
// }
