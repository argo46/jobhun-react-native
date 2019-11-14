import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isLoading: false,
  isError: false,
  username: '',
  isLogin: false,
  token: '',
  isRegistrationSucces: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'LOGIN_FULFILLED':
      storeData('username', action.payload.data.result.name);
      storeData('token', action.payload.data.token);
      return {
        ...state,
        isLoading: false,
        isError: false,
        username: action.payload.data.result.name,
        token: action.payload.data.token,
        isLogin: true,
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegistrationSucces: true,
      };
    case 'LOGOUT':
      clearAllData();
      return {
        ...state,
        isLoading: false,
        isError: false,
        username: '',
        token: '',
        isLogin: false,
        isRegistrationSucces: false,
      };
    case 'KEEP_LOGIN':
      return {
        isLoading: false,
        isError: false,
        username: action.userName,
        isLogin: true,
        token: action.token,
      };
    default:
      return state;
  }
};
export default user;

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
