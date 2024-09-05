import * as types from '../types'

const initialState = {
    isLoggeIn: false,
    token:false,
    user:{},
    isloading: false
}
export default function reducer(state = initialState, actions){
    switch (actions.type){
        case types.LOGIN_REQUEST:{
            console.log('reducer', actions.payload)
            return state
        }

        default: 
            return state
    }
}