import * as types from './types';

export function beginLogin() {
  return {
    type: types.LOGIN,
  };
}

export function loginSuccess(user) {
  return {
    user,
    type: types.LOGIN_SUCCESS,
  };
}

export function loginError(error) {
  return {
    error,
    type: types.LOGIN_ERROR,
  };
}

export function login(user) {
  return async dispatch => {
    dispatch(beginLogin());

    try {
      dispatch(loginSuccess(user));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
}

export function logout() {
  return async dispatch => {
    dispatch({
      type: types.LOGOUT,
    });
  };
}
