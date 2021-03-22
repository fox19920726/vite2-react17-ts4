import {
  USER_ENTER_NAME,
  USER_LOGIN,
  USER_SUCCESS,
  USER_ERROR
} from './types'
import { ILogin, ILoginState } from '@/types/userInterface'

export const userEnterName = (data: ILogin): ILoginState => ({
    type: USER_ENTER_NAME,
    payload: data
})

export const userLogin = (): ILoginState => ({
    type: USER_LOGIN
})

export const userSuccess = (): ILoginState => ({
    type: USER_SUCCESS
})

export const userError = (): ILoginState => ({
    type: USER_ERROR
})