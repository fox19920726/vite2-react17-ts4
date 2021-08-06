import React, { useReducer, useEffect } from 'react'
import { getToken } from '@/utils/cookie'
import { getUserInfo } from '@/api/api'
import { IUserInfo, IUserState } from '@/types/userInterface'

const user: IUserInfo = {
  roleId: 0,
  roleName: '',
  token: getToken(),
  userId: 0,
  userName: ''
}

function userInfoReducer(state: IUserInfo, action: IUserState): IUserInfo {
  const { type, payload } = action

  switch(type) {
    case 'setInfo':
      return {
        ...state,
        ...payload
      }
    default: 
      return state
  }
}

function useUserInfo(): any[] {
  const [state, dispatch] = useReducer(userInfoReducer, user)

  const handleInfo = async (): Promise<void> => {
    const { data } = await getUserInfo(getToken())
    dispatch({
      type: 'setInfo',
      payload: data
    })
  }

  useEffect(() => {
    handleInfo()
  }, [])

  return [state, handleInfo]
} 
export default useUserInfo