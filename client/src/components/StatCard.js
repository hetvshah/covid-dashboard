import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { addPins } from '../actions/pins';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const StatCard = (props) => {
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [color, setColor] = useState('primary');
  const [chosenState, setChosenState] = useState(null);
  const [chosenCounty, setChosenCounty] = useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);

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


    toast.success('Pin added!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if (chosenCounty !== null) {
      const info = {
        county: chosenCounty.county,
        state: chosenCounty.state,
        cases: chosenCounty.cases,
        deaths: chosenCounty.deaths,
      };
      dispatch(addPins(info, user.result._id));
    } else if (chosenState !== null) {
      const info = {
        county: chosenState.county,
        state: chosenState.state,
        cases: chosenState.cases,
        deaths: chosenState.deaths,
      };
      dispatch(addPins(info, user.result._id));
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

