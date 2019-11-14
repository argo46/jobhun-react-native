import axios from 'axios';

export const getCompanies = () => {
  console.log('GET --> http://localhost:3000/company/');
  return {
    type: 'GET_COMPANIES',
    payload: axios({method: 'GET', url: 'http://localhost:3000/company/'}),
  };
};
