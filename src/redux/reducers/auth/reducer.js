import types from './actions';

const initialState = {
  token: '',
  userdata: {},
  screen: '',
  connected: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        token: action.token,
        userdata: action.userdata,
      };

    case types.SET_USER:
      return {
        ...state,
        userdata: action.userdata,
      };

    case types.SET_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };

    case types.SET_NETWORK_STATUS:
      return {
        ...state,
        connected: action.connected,
      };

    default:
      return state;
  }
};
