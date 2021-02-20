import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Auth } from './types';
import { loginSuccess, loginFailure, logoutSuccess, loginRequest } from './actions';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

interface Request {
  email: string;
  password: string;
}

export function* login({ payload}: ReturnType<typeof loginRequest>) {
  try {
    const { email, password }: Request = payload;
    
    const response = yield call(api.get, 'users');

    const user: User = response.data.find((user: User) => {
      return user.email === email;
    });

    if(user && user.password === password) {
      const response2 = yield call(api.post, 'sessions', {id_user: user.id});

      const session: Auth = response2.data

      localStorage.setItem('@WiserTeste:token', session.token);
      localStorage.setItem('@WiserTeste:user', JSON.stringify(user));

      yield put(loginSuccess(session));
    } else {
      yield put(loginFailure());
    }
  } catch (err) {
    yield put(loginFailure());
  }
}

export function* logout() {
  try {
    localStorage.removeItem('@WiserTeste:token');
    localStorage.removeItem('@WiserTeste:user');

    yield put(logoutSuccess());
  } catch(err) {
    console.log(err);
  }
}