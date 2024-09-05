import {  put, call, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios'


function* loginRequest({payload}) {
    try {
      const response = yield call(axios.post, '/login', payload)
      yield put(actions.loginSuccess({...response.data}))
  
      toast.success("Login Realizado com sucesso")
  
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
  
      window.location.href = payload.prevPath;
    } catch (err) {
        console.log(err)
      toast.error('Usuario ou senha invalidos')
      yield put(actions.loginFailure())
    }
}
  
function* authSagas() {
    yield all([
        takeLatest(types.LOGIN_REQUEST, loginRequest),
    ]);
}

export default authSagas