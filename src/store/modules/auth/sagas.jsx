import { call, put, all, takeLatest } from 'redux-saga/effects';
import {toast} from 'react-toastify'
import {get} from 'lodash'

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios'


function* requestLogin({payload}){
   try{
    const response = yield call(axios.post, '/login', payload)

    yield put(actions.loginSuccess({...response.data}))

    toast.success("Login Realizado com sucesso")

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
    window.location.href = payload.prevPath;
   }catch(err){
    console.log(err)
    toast.error('Usuario ou senha invalidos')

    yield put(actions.LoginFailure())
   }
}

function persistRehydrate({payload}){
    const token = get(payload, 'auth.token', '')
    if(!token) return
    axios.defaults.headers.Authorization = `Bearer ${token}`
  }

// eslint-disable-next-line react-refresh/only-export-components
export default all([
    takeLatest(types.LOGIN_REQUEST,requestLogin ),
    takeLatest(types.PERSIST_REHYDRATE,persistRehydrate )

])