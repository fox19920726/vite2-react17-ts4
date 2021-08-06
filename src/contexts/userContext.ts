import React from 'react'
import { IUserInfo } from '@/types/userInterface'

const userInfo:IUserInfo = {
  roleId: 0,
  roleName: '',
  token: '',
  userId: 0,
  userName: ''
}

const handleInfo = ():void => {}

const UserContext = React.createContext({ userInfo, handleInfo })

export default UserContext