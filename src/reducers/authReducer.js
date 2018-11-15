import { SET_USER, AUTH_ERROR } from '../actions/index';

const initialState = {
  user: null,
  loggedIn: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action) {
  case SET_USER:
    return ({
      ...state,
      user: action.payload,
      loggedIn: true,
    });
  case AUTH_ERROR:
    return ({
      ...state,
      error: true,
    });
  default:
    return state;
  }
};

export { authReducer };
