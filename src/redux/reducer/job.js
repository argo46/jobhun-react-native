const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  errorMessage: '',
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
    default:
      return state;
  }
};

export default jobs;
