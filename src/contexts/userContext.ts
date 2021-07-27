import React from 'react'
import { IUserInfo } from '@/types/userInterface'
import { IRoute } from '@/types/menuInterface'

const userInfo:IUserInfo = {
  roleId: 0,
  roleName: '',
  token: '',
  userId: 0,
  userName: ''
}
const paths: IRoute[] = []

const handleInfo = ():void => {}
const handleAsyncRoutes = ():void => {}

const UserContext = React.createContext({ userInfo, handleInfo, paths, handleAsyncRoutes })

export default UserContext