import axios from 'axios';
import Papa from 'papaparse';

const urlStates =
  'https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-states.csv';
// const urlCounties =
//   'https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-counties.csv';

export const fetchStates = async () => {
  //   try {
  //     const response = await axios.get(urlStates);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }

  return axios
    .get(urlStates)
    .then((response) => Papa.parse(response.data, { header: true }));
};

// export const fetchCounties = async () => {
//   try {
//     const {
//       data: {
//         date,
//         county,
//         state,
//         fips,
//         cases,
//         deaths,
//         confirmed_cases,
//         confirmed_deaths,
//         probable_cases,
//         probable_deaths,
//       },
//     } = await axios.get(urlCounties);

//     return {
//       date,
//       county,
//       state,
//       fips,
//       cases,
//       deaths,
//       confirmed_cases,
//       confirmed_deaths,
//       probable_cases,
//       probable_deaths,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
