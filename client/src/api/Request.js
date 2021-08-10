import axios from 'axios';
import Papa from 'papaparse';

const urlStates =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-states.csv';
const urlCounties =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv';

export const fetchStates = async () => {
  return axios
    .get(urlStates)
    .then((response) => Papa.parse(response.data, { header: true }));
};

export const fetchCounties = async () => {
    return axios
    .get(urlCounties)
    .then((response) => Papa.parse(response.data, { header: true }));
};
