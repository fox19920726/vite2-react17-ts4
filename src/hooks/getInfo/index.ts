import React, { useReducer } from 'react'
import { getToken } from '@/utils/cookie'
import { getUserInfo, goExit } from '@/api/api'
import { IUserInfo } from '@/tsTypes/userInterface.d'
import { userInfoReducer } from './reducer/reducer'
import { setInfo, clearInfo } from './reducer/action'
import { removeToken } from '@/utils/cookie'

const user: IUserInfo = {
  roleId: 0,
  roleName: '',
  token: getToken(),
  userId: 0,
  userName: ''
}

function useUserInfo() {
  const [state, dispatch] = useReducer(userInfoReducer, user)

  const handleInfo = async (): Promise<void> => {
    const { data } = await getUserInfo(getToken())
    dispatch(setInfo(data))
  }

  const handleExit = async() => {
    /* 
    * 退出登陆
    * 删除本地cookie
    * 清除context里的user数据(其实并不需要删除，因为反正要刷新，哈哈哈哈哈)
    * 刷新页面
    */
    await goExit()
    removeToken()
    dispatch(clearInfo(user))
    window.location.reload()
  }

  return [state, handleInfo, handleExit] as const
} 
export default useUserInfo