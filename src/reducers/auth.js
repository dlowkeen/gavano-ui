import * as types from '../actions/types';

const initialState = {
  error: null,
  user: {},
};

export default function source(state = initialState, action) {
  const {error, user} = action;
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user,
        loading: false,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error,
        user: {},
        loading: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        error,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
}
