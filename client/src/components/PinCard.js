import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { useState } from 'react';
import { deletePin } from '../actions/pins';
import { useDispatch, useSelector } from 'react-redux';

const PinCard = (props) => {
  const [color, setColor] = useState('secondary');
  const [chosenState, setChosenState] = useState();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const pins = useSelector((state) => state.pins);

  function handleClick() {
    if (color === 'primary') {
      setColor('secondary');
    } else {
      setColor('primary');
    }

    if (props.pin.county !== undefined) {
      console.log(props.pin);
      //   const info = {
      //     county: chosenCounty.county,
      //     state: chosenCounty.state,
      //     cases: chosenCounty.cases,
      //     deaths: chosenCounty.deaths,
      //   };
      //   dispatch(addPins(info));
    } else if (props.pin.state !== undefined) {
      //   console.log(props.pin);
      for (var i = 0; i < pins.length; i++) {
        if (pins[i].state === props.pin.state) {
          // setChosenState(pins[i]);
          dispatch(deletePin(pins[i], user.result._id));
          break;
        }
      }
    }
  }

  return (
    <div className="outer-container">
      <h2>
        {/* {console.log(props)} */}
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
