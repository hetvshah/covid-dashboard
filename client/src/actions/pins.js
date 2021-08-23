import * as api from '../api/API';

const user = JSON.parse(localStorage.getItem('profile'));

export const getPins = () => async (dispatch) => {
  try {
    if (user !== null) {
      const { data } = await api.getPins(user.result._id);
      dispatch({ type: 'FETCH_ALL', payload: data });
    } else {
      const { data } = await api.getPins('');
      dispatch({ type: 'FETCH_ALL', payload: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addPins = (pin) => async (dispatch) => {
  try {
    if (user !== null) {
      console.log(user.result._id);
      const { data } = await api.addPin(pin, user.result._id);
      dispatch({ type: 'CREATE', payload: data });
    } else {
      const { data } = await api.addPin(pin, '');
      dispatch({ type: 'CREATE', data });
    }
  } catch (err) {
    console.log(err);
  }
};
