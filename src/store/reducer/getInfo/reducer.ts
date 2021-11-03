import { CLEAR_INFO, SET_INFO } from './types'
import { IUserInfo, IUserState } from '@/tsTypes/userInterface.d'
import { getToken } from '@/utils/cookie'


const initial: IUserInfo = {
  roleId: 0,
  roleName: '',
  token: getToken(),
  userId: 0,
  userName: ''
}

const userInfoReducer = (state = initial, action: IUserState): IUserInfo => {
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

export default userInfoReducer