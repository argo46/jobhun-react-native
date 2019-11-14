import axios from 'axios';
import {BASE_URL} from 'react-native-dotenv';

export const getJobs = query => {
  let url = 'http://localhost:3000/job/jobs/?' + query;
  console.log(url);
  return {
    type: 'GET_JOBS',
    payload: axios.get(url),
  };
};
