import axios from 'axios';
import qs from 'qs';
import {config} from '../../configs/configs';

export const getJobs = query => {
  let url = config.BASE_URL + '/job/jobs/?' + query;
  console.log(url);
  return {
    type: 'GET_JOBS',
    payload: axios.get(url),
  };
};

export const addJob = (jobData, token) => {
  return {
    type: 'ADD_JOB',
    payload: axios({
      method: 'POST',
      url: config.BASE_URL + '/job',
      data: qs.stringify(jobData),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Bearer ' + String(token),
      },
    }),
  };
};

export const updateJob = (id, dataJob, token) => {
  return {
    type: 'UPDATE_JOB',
    idJob: id,
    payload: axios({
      method: 'PATCH',
      url: config.BASE_URL + '/job/' + id,
      data: qs.stringify(dataJob),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Bearer ' + String(token),
      },
    }),
  };
};

export const deleteJob = (id, token) => {
  return {
    type: 'DELETE_JOB',
    payload: axios({
      method: 'DELETE',
      url: config.BASE_URL + '/job/' + id,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Bearer ' + String(token),
      },
    }),
  };
};
