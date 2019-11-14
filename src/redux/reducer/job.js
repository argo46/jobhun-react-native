const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  errorMessage: '',
  isAddSuccess: false,
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_JOBS_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_JOBS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case 'GET_JOBS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case 'ADD_JOB_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_JOB_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      };
    case 'ADD_JOB_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAddSuccess: true,
        // data:action.payload.data
      };
    default:
      return state;
  }
};

export default jobs;
