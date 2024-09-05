import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';


function* requestLogin({payload}){
    console.log('saga', payload)
}

// eslint-disable-next-line react-refresh/only-export-components
export default all([takeLatest(types.LOGIN_REQUEST,requestLogin )])