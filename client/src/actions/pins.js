import * as api from '../api/API';

export const getPins = () => async (dispatch) => {
  try {
    const { data } = await api.getPins();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPins = (pin) => async (dispatch) => {
  try {
    const { data } = await api.addPin(pin);
    dispatch({ type: 'CREATE', data });
  } catch (err) {
    console.log(err);
  }
};
