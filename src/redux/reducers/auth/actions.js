const types = {
  SET_DATA: 'auth/SET_DATA',
  SET_USER: 'auth/SET_USER',
  SET_SCREEN: 'auth/SET_SCREEN',
  SET_NETWORK_STATUS: 'auth/SET_NETWORK_STATUS',

  setUserData: (token, data) => dispatch => {
    let tok = '';
    let udata = {};
    if (token !== undefined && token !== null && token !== '') {
      tok = token;
    }
    if (data !== undefined && data !== null && Object.keys(data).length > 0) {
      udata = data;
    }
    return dispatch({
      type: types.SET_DATA,
      token: tok,
      userdata: udata,
    });
  },

  setUser: data => dispatch =>
    dispatch({
      type: types.SET_USER,
      userdata: data,
    }),

  setScreen: screen => dispatch =>
    dispatch({
      type: types.SET_SCREEN,
      screen,
    }),

  onConnectionChange: isConnected => dispatch =>
    dispatch({
      type: types.SET_NETWORK_STATUS,
      connected: !!isConnected,
    }),
};

export default types;
