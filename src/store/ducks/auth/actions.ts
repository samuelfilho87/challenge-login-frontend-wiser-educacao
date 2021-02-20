import { action } from 'typesafe-actions';
import { AuthTypes, Auth } from './types';

export const loginRequest = (email: string, password: string) => action(AuthTypes.LOGIN_REQUEST, { email, password });

export const loginSuccess = (data: Auth) => action(AuthTypes.LOGIN_SUCCCES, { data });

export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);

export const logoutSuccess = () => action(AuthTypes.LOGOUT_SUCCESS);