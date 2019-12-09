const initialState = {
  isLoading: true,
  isError: false,
  data: [],
  newData: false,
};

const companies = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPANIES_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_COMPANIES_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_COMPANIES_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        newData: false,
        data: action.payload.data,
      };
    case 'ADD_COMPANY_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_COMPANY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'ADD_COMPANY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        newData: true,
      };
    default:
      return state;
  }
};
export default companies;
