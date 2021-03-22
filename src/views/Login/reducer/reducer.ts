import {
  USER_ENTER_NAME,
  USER_LOGIN,
  USER_SUCCESS,
  USER_ERROR
} from './types'

import { ILogin, ILoginState } from '@/types/userInterface'

export function loginReducer(state: ILogin, action: ILoginState): ILogin {
  const { type, payload } = action

  switch(type) {
    case USER_ENTER_NAME:
      return {
        ...state,
        ...payload
      }
    case USER_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      }
    case USER_ERROR:
      return {
        ...state,
        error: payload?.error,
        isLoading: false
      }
    default: 
      return state
  }
}