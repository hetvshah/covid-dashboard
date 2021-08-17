import React from 'react';
import * as api from '../api/API';
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

export const addPins = (pin) => async () => {
  try {
    const { data } = await api.addPin(pin);
    dispatch({ type: 'CREATE', data });
  } catch (err) {
    console.log(err);
  }
};
