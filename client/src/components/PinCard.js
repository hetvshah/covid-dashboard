import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { useState } from 'react';
import { deletePin } from '../actions/pins';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PinCard = (props) => {
  const [color] = useState('secondary');
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const pins = useSelector((state) => state.pins);
  console.log(pins);

  function handleClick() {
    toast.error('Pin removed!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if (props.pin.county !== undefined) {
      for (var i = 0; i < pins.length; i++) {
        if (
          pins[i].county === props.pin.county &&
          pins[i].state === props.pin.state
        ) {
          dispatch(deletePin(pins[i], user.result._id));
          break;
        }
      }
    } else if (props.pin.state !== undefined) {
      for (i = 0; i < pins.length; i++) {
        if (pins[i].state === props.pin.state) {
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
