import axios from '../utils/axiosInstance';
import { RECEIVE_NOTES } from './notesActions';

export const GET_AUTHENTICATE = 'GET_AUTHENTICATE';
export const SET_USER = 'SET_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

const url = process.env.REACT_APP_SERVER || 'http://localhost:8000';
const sessionChip = 'lambdaNotesUser';

export const authenticate = () => (dispatch) => {
  return axios.get(`${url}/auth/user`)
    .then((res) => {
      if (res.data && res.data.username) {
        return dispatch({ type: SET_USER, payload: res.data.username });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = ({ username, password }) => (dispatch) => {
  return axios.post(`${url}/auth/login`, { username, password })
    .then((res) => {
      if (!res.data || !res.data.username) {
        return dispatch({ type: AUTH_ERROR, payload: 'User/password combination did not pass.' });
      }
      sessionStorage.setItem(sessionChip, res.data.username);
      return dispatch({ type: SET_USER, payload: res.data.username });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: AUTH_ERROR, payload: 'Login failed.' });
    });
};

export const register = ({ username, password }) => (dispatch) => {
  return axios.post(`${url}/auth/register`, { username, password })
    .then((res) => {


    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: AUTH_ERROR, payload: 'Registration failed' });
    });
};

export const logout = () => (dispatch) => {
  return axios.post(`${url}/auth/logout`)
    .then((res) => {
      dispatch({ type: RECEIVE_NOTES, payload: [] });
      dispatch({ type: SET_USER, payload: null });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: AUTH_ERROR, payload: 'Logout failed.' });
    });
};
