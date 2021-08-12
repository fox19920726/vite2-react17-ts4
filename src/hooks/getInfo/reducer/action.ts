import { SET_INFO, CLEAR_INFO } from './types'
import { IUserInfo, IUserState } from '@/types/userInterface'

export const setInfo = (state: IUserInfo): IUserState => ({
  type: SET_INFO,
  payload: state
})

export const clearInfo = (state: IUserInfo): IUserState => ({
  type: CLEAR_INFO,
  payload: state
})