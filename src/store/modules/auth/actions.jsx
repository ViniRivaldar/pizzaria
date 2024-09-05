import * as types from '../types'

// eslint-disable-next-line react-refresh/only-export-components
export function loginRequest(payload) {
    return {
        type: types.LOGIN_REQUEST,
        payload,
    };
}

// eslint-disable-next-line react-refresh/only-export-components
export function loginSuccess(payload) {
    return {
        type: types.LOGIN_SUCCESS,
        payload
    };
}

export function LoginFailure(payload) {
    return {
        type: types.LOGIN_FAILURE,
        payload
    };
}
