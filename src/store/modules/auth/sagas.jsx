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

function* registerRequest({payload}){

  const {id, name, phone, email, password} = payload

  try {
    if(id){
      yield call(axios.put, '/users', {
        name,
        phone,
        email,
        password,
      })

      toast.success('Conta editada com sucesso!')
      yield put(actions.registerUpdatedSuccess({name, phone, email, password}))

    }else{

      yield call(axios.post, '/users', {
        name,
        phone,
        email,
        password
      })
      toast.success('Conta criada com sucesso!')

      yield put(actions.registerCreatedSuccess({name, phone, email, password}))
      window.location.href = '/login'

    }

  } catch (err) {
    const errors = get(err, 'response.data.errors', [])
    const status = get(err, 'response.status', 0)


    if(status === 401){
      toast.error('Você precisa fazer o login novamente')
      yield put(actions.registerFailure())
      return 
    }

    if(errors.length > 0){
      errors.map(error => toast.error(error))
    }else{
      toast.error('Erro desconhecido')
    }

    yield put(actions.registerFailure())
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default all([
    takeLatest(types.LOGIN_REQUEST,requestLogin ),
    takeLatest(types.PERSIST_REHYDRATE,persistRehydrate ),
    takeLatest(types.REGISTER_REQUEST,registerRequest )

])