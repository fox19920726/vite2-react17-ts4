import { SET_INFO, CLEAR_INFO } from './types'
import { IUserInfo, IUserState } from '@/tsTypes/userInterface.d'

/* 
* 这里用了as const断言
* 但是其实声明函数返回类型IUserState也是行的
* 而且这里就算用了断言，reducer那里action的类型还不是要写声明吗
* 所以好像没怎么方便，所以只改了这个地方的
*/
export const setInfo = (state: IUserInfo) => ({
  type: SET_INFO,
  payload: state
} as const)

export const clearInfo = (state: IUserInfo) => ({
  type: CLEAR_INFO,
  payload: state
} as const)