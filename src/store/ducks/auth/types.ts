/**
 * Action types
 */
export enum AuthTypes {
  LOGIN_SUCCCES = '@auth/LOGIN_SUCCESS',
  LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@auth/LOGOUT_SUCCESS',
}

/**
 * Data types
 */
export interface Auth {
  token: string;
  id_user: number;
}

/**
 * State type
 */
export interface AuthState {
  readonly auth: Auth | null;
  readonly signed: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}
