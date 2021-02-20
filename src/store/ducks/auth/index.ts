// import { route } from 'next/dist/next-server/server/router';
import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  auth: null,
  signed: false,
  loading: false,
  error: false
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGIN_SUCCCES:
      return {
      ...state, loading: false, error: false, signed: true, data: action.payload.data,
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
      ...state, loading: false, error: true, signed: false, data: [],
      };
    case AuthTypes.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.LOGOUT_SUCCESS:
      return {
      ...state, loading: false, error: false, signed: false, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
