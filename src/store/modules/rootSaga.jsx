import { all } from 'redux-saga/effects'

import Cart from './cart/sagas'
import Auth from './auth/sagas'

export default function* rootSaga(){
    return yield all([Cart, Auth])
}