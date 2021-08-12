import { CLEAR_INFO, SET_INFO } from './types'
  
import { IUserInfo, IUserState } from '@/types/userInterface'

export function userInfoReducer(state: IUserInfo, action: IUserState): IUserInfo {
  const { type, payload } = action

  switch(type) {
    case SET_INFO:
      return {
        ...state,
        ...payload
      }
    case CLEAR_INFO:
      return {
        ...state,
        ...payload
      }
    default: 
      return state
  }
}