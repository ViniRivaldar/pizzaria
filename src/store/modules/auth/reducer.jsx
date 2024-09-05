import * as types from '../types'
import axios from '../../../services/axios'
const initialState = {
    isLoggedIn: false,
    token:false,
    user:{},
    isLoading: false
}

export default function reducer(state = initialState, actions){
    switch (actions.type){
        case types.LOGIN_SUCCESS:{
            const newState = {...state}
            newState.isLoggedIn= true
            newState.token = actions.payload.token
            newState.user = actions.payload.user
            newState.isLoading = false
            return newState
        }
        case types.LOGIN_FAILURE:{
            const newState = {...state}
            delete axios.defaults.headers.Authorization;
            newState.isLoggedIn = false
            newState.token = false
            newState.user = {}
            newState.isLoading = false
            return newState
        }

        case types.LOGIN_REQUEST:{
            const newState = {...state}
            newState.isLoading = false
            return newState
        }
      

        default: 
            return state
    }
}