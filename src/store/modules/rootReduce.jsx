import { combineReducers } from "redux";

import CartReducer from './cart/reducer'
import AuthReducer from './auth/reducer'


const rootReducer =  combineReducers({
   cart: CartReducer,
   auth: AuthReducer
})

export default rootReducer