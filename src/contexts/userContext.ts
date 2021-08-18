import React from 'react'
import { IUserContext } from '@/tsTypes/userInterface.d'

const UserContext = React.createContext({} as IUserContext)

export default UserContext