import { SET_USER, AUTH_ERROR } from '../actions/index';

const demoMsg = 'Hint: For Demo, use "user1" for username and "1234" for password';

const initialState = {
  user: null,
  loggedIn: false,
  error: demoMsg,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    console.log(action);
    return {
      ...state,
      user: action.payload,
      loggedIn: true,
    };
  case AUTH_ERROR:
    return {
      ...state,
      error: `${action.payload} ${demoMsg}`,
    };
  default:
    return state;
  }
};

export { authReducer };
