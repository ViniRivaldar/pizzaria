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
            window.location.href = '/login'
            return newState
        }

        case types.LOGIN_REQUEST:{
            const newState = {...state}
            newState.isLoading = false
            return newState
        }

        case types.REGISTER_UPDATED_SUCCESS:{
            console.log(actions.payload)
            const newState = {
                ...state,
                user: {
                    ...state.user, 
                    name: actions.payload.name,
                    email: actions.payload.email,
                },
                isLoading: false,
            };
            return newState
        }
          
        case types.REGISTER_CREATED_SUCCESS:{
            const newState = {...state}
            newState.isLoading = false
            return newState
        }
          
        case types.REGISTER_FAILURE:{
            const newState = {...state}
            newState.isLoggedIn = false
            newState.token = false
            newState.user = {}
            newState.isLoading = false
            window.location.href = '/login'
            return newState
        }

        case types.REGISTER_REQUEST:{
            const newState = {...state}
            newState.isLoading = true
            return newState
        }
      

        default: 
            return state
    }
}