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

const user = JSON.parse(localStorage.getItem('profile'));
const id = user.result._id;

export const signup = (formData) => {
  API.post('/users/signup', formData);
};
export const login = (formData) => API.post('/users/login', formData);

export const getPins = () => API.get(`/pins/${id}`);
export const addPin = (pin) => API.post(`/pins/${id}`, pin);
// `/posts/${id}`
