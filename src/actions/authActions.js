import axios from 'axios';

export const GET_AUTHENTICATE = 'GET_AUTHENTICATE';
export const SET_USER = 'SET_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const url = process.env.REACT_APP_SERVER || 'http://localhost:8000';

export const authenticate = () => dispatch => {
  const lambdaUser = sessionStorage.getItem('lambdaNotesUser');
  if (lambdaUser) {
    return dispatch({ type: SET_USER, payload: lambdaUser });
  };
};

export const login = (username, password) => dispatch => {
  return axios(`${url}/auth/user`, { username, password })
    .then((res) => {
      
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: LOGIN_ERROR });
    });
  const lambdaUser = sessionStorage.getItem('lambdaNotesUser');
  if (lambdaUser) {
    return dispatch({ type: SET_USER, payload: lambdaUser });
  }
};
