import axios from 'axios';

export const getCompanies = () => {
  return {
    type: 'GET_COMPANIES',
    payload: axios({method: 'GET', url: 'http://localhost:3000/company/'}),
  };
};

export const addCompany = dataCompany => {
  console.log(dataCompany);
  return {
    type: 'ADD_COMPANY',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3000/company/',
      data: dataCompany,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }),
  };
};
