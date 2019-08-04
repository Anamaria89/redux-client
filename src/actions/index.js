import { AUTH_USER, AUTH_ERROR, AUTH_PASSWORD } from './types';
import axios from 'axios';

export const register = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost/jwt-laravel/public/api/register', formProps)
        dispatch({
            type: AUTH_USER, payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use'});
        dispatch({ type: AUTH_PASSWORD, payload: 'Passwords dont match' });
    }
};
export const login = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        'http://localhost/jwt-laravel/public/api/login',
        formProps
      );
  
      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
  };
export const signout = () => {
    localStorage.removeItem('token');
  
    return {
      type: AUTH_USER,
      payload: ''
    };
  };