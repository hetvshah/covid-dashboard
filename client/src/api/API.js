import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const signup = (formData) => {
  API.post('/users/signup', formData);
};
export const login = (formData) => API.post('/users/login', formData);

export const getPins = (id) => API.get(`/pins/${id}`);
export const addPin = (pin, id) => API.post(`/pins/${id}`, pin);
export const deletePin = (pin, id) => API.delete(`/pins/${id}/${pin._id}`, pin);
