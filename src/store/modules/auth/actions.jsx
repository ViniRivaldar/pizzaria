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

// eslint-disable-next-line react-refresh/only-export-components
export function registerRequest(payload) {
    return {
      type: types.REGISTER_REQUEST,
      payload
    };
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function registerUpdatedSuccess(payload) {
    return {
      type: types.REGISTER_UPDATED_SUCCESS,
      payload
    };
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function registerCreatedSuccess(payload) {
    return {
      type: types.REGISTER_CREATED_SUCCESS,
      payload
    };
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function registerFailure(payload) {
    return {
      type: types.REGISTER_FAILURE,
      payload
    };
  }