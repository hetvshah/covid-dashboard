import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { useState } from 'react';

const PinCard = (props) => {
  const [color, setColor] = useState('secondary');
  const [chosenState] = useState(null);
  const [chosenCounty] = useState(null);

  function handleClick() {
    if (color === 'primary') {
      setColor('secondary');
    } else {
      setColor('primary');
    }
    // console.log(chosenCounty);
    if (chosenCounty !== null) {
      //   const info = {
      //     county: chosenCounty.county,
      //     state: chosenCounty.state,
      //     cases: chosenCounty.cases,
      //     deaths: chosenCounty.deaths,
      //   };
      //   dispatch(addPins(info));
    } else if (chosenState !== null) {
      //   const info = {
      //     county: chosenState.county,
      //     state: chosenState.state,
      //     cases: chosenState.cases,
      //     deaths: chosenState.deaths,
      //   };
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
