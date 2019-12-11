import axios from 'axios';
import {config} from '../../configs/configs';

export const getCompanies = () => {
  return {
    type: 'GET_COMPANIES',
    payload: axios({method: 'GET', url: config.BASE_URL + '/company/'}),
  };
};

export const addCompany = dataCompany => {
  console.log(dataCompany);
  return {
    type: 'ADD_COMPANY',
    payload: axios({
      method: 'POST',
      url: config.BASE_URL + '/company/',
      data: dataCompany,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }),
  };
};
