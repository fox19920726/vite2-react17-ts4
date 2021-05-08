import React from 'react'
import { IUserInfo, IUserState } from '@/types/userInterface'

const state:IUserInfo = {
  roleId: 0,
  roleName: '',
  token: '',
  userId: 0,
  userName: ''
}

const handleInfo = ():void => {}

const UserContext = React.createContext({ state, handleInfo })

export default UserContext