import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PinCard = (props) => {
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [color, setColor] = useState('secondary');
  const [chosenState, setChosenState] = useState(null);
  const [chosenCounty, setChosenCounty] = useState(null);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (props.label.indexOf(',') <= -1) {
  //       // state
  //       props.states.data.map((state) => {
  //         if (state.state === props.label) {
  //           setCases(state.cases);
  //           setDeaths(state.deaths);
  //           setChosenState(state);
  //         }
  //         return null;
  //       });
  //     } else {
  //       // county
  //       const index = props.label.indexOf(',');
  //       const countyLabel = props.label.substring(0, index);
  //       const stateLabel = props.label.substring(index + 2, props.label.length);
  //       console.log(stateLabel);
  //       props.counties.data.map((county) => {
  //         if (county.county === countyLabel && county.state === stateLabel) {
  //           setCases(county.cases);
  //           setDeaths(county.deaths);
  //           setChosenCounty(county);
  //         }
  //         return null;
  //       });
  //     }
  //   }, [props.counties.data, props.states.data, props.label]);

  function handleClick() {
    if (color === 'primary') {
      setColor('secondary');
    } else {
      setColor('primary');
    }
    // console.log(chosenCounty);
    if (chosenCounty !== null) {
      const info = {
        county: chosenCounty.county,
        state: chosenCounty.state,
        cases: chosenCounty.cases,
        deaths: chosenCounty.deaths,
      };
      //   dispatch(addPins(info));
    } else if (chosenState !== null) {
      const info = {
        county: chosenState.county,
        state: chosenState.state,
        cases: chosenState.cases,
        deaths: chosenState.deaths,
      };
      //   dispatch(addPins(info));
    }
  }

  return (
    <div className="outer-container">
      <h2>
        {console.log(props)}
        {props.pin.county === undefined
          ? props.pin.state
          : props.pin.county + ', ' + props.pin.state}
      </h2>
      <p>Confirmed cases: {props.pin.cases}</p>
      <p>Deaths: {props.pin.deaths}</p>
      <AiFillPushpin
        className={color}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
};

export default PinCard;
