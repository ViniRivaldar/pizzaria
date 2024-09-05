import * as types from '../types'

const initialState = {
    isLoggedIn: false,
    token: false,
    user:{},
    isLoading: false
}
export default function reducer(state = initialState, actions){
    switch (actions.type){
        case types.LOGIN_REQUEST:{
            const newState = {...state}
            newState.isLoading = true
            return newState
        }

        default: 
            return state
    }
}