import React from 'react';
import './Stat.css';
import { AiFillPushpin } from 'react-icons/ai';
import { addPins } from '../actions/pins';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getPins } from '../actions/pins';
import { deletePin } from '../actions/pins';

const StatCard = (props) => {
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [color, setColor] = useState('primary');
  const [chosenState, setChosenState] = useState(null);
  const [chosenCounty, setChosenCounty] = useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (user !== null) {
      dispatch(getPins(user.result._id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPins = useSelector((state) => {
    return state.pins;
  });

  useEffect(() => {
    if (props.label.indexOf(',') <= -1) {
      // state
      props.states.data.map((state) => {
        if (state.state === props.label) {
          setCases(state.cases);
          setDeaths(state.deaths);
          setChosenState(state);

          console.log(currentPins);

          for (var i = 0; i < currentPins.length; i++) {
            if (currentPins[i].state === state.state) {
              setColor('secondary');
            }
          }
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

          for (var i = 0; i < currentPins.length; i++) {
            if (
              currentPins[i].county === county.county &&
              currentPins[i].state === county.state
            ) {
              setColor('secondary');
            }
          }
        }
        return null;
      });
    }
  }, [props.counties.data, props.states.data, props.label, currentPins]);

  function handleClick() {
    // if (color === 'primary') {
    //   setColor('secondary');
    // } else {
    //   setColor('primary');
    // }

    // toast.success('Pin added!', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    if (chosenCounty !== null) {
      if (color === 'primary') {
        setColor('secondary');
        toast.success('Pin added!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const info = {
          county: chosenCounty.county,
          state: chosenCounty.state,
          cases: chosenCounty.cases,
          deaths: chosenCounty.deaths,
        };
        dispatch(addPins(info, user.result._id));
      } else {
        setColor('primary');
        toast.error('Pin removed!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        for (var i = 0; i < currentPins.length; i++) {
          if (
            currentPins[i].county === chosenCounty.county &&
            currentPins[i].state === chosenCounty.state
          ) {
            dispatch(deletePin(currentPins[i], user.result._id));
            break;
          }
        }
      }
    } else if (chosenState !== null) {
      if (color === 'primary') {
        setColor('secondary');
        toast.success('Pin added!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const info = {
          county: chosenState.county,
          state: chosenState.state,
          cases: chosenState.cases,
          deaths: chosenState.deaths,
        };
        dispatch(addPins(info, user.result._id));
      } else {
        setColor('primary');
        toast.error('Pin removed!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        for (i = 0; i < currentPins.length; i++) {
          if (currentPins[i].state === chosenState.state) {
            dispatch(deletePin(currentPins[i], user.result._id));
            break;
          }
        }
      }
    }
  }

  return (
    <div className="outer-container">
      {console.log(props.label)}
      <h2>{props.label}</h2>

      <p>Confirmed cases: {cases}</p>
      <p>Deaths: {deaths}</p>
      {user === null ? (
        ''
      ) : (
        <AiFillPushpin
          className={color}
          onClick={() => {
            handleClick();
          }}
        />
      )}
    </div>
  );
};

export default StatCard;
