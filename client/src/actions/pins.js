import * as api from '../api/API';

export const getPins = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPins(id);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addPins = (pin, id) => async (dispatch) => {
  try {
    const { data } = await api.addPin(pin, id);
    dispatch({ type: 'CREATE', payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePin = (pin, id) => async (dispatch) => {
  try {
    const { data } = await api.deletePin(pin, id);

    dispatch({ type: 'DELETE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
