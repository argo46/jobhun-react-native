import axios from 'axios';

export const getJobs = query => {
  return {
    type: 'GET_JOBS',
    payload: axios.get('http://192.168.1.4:3000/job/jobs/?' + query),
  };
};
