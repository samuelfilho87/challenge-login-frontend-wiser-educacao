import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { login, logout } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
  ]);
}
