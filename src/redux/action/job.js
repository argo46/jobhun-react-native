import axios from 'axios';
import {BASE_URL} from 'react-native-dotenv';
import qs from 'qs';

export const getJobs = query => {
  let url = 'http://localhost:3000/job/jobs/?' + query;
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
      url: 'http://localhost:3000/job',
      data: qs.stringify(jobData),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: 'Bearer ' + String(token),
      },
    }),
  };
};
