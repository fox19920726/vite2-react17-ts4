import request from '@/utils/request'
import { IData, IUserInfo } from '@/types/userInterface'

// AxiosResponse

export function getUserInfo(token: string): Promise<IUserInfo> {
  return request<IUserInfo>({
    url: '/user/info',
    method: 'get',
    params: token
  })
}

// 登录
export function login(name: string, password: string): Promise<IData> {
  return request<IData>({
    url: '/login',
    method: 'post',
    data: {
      name: name.trim(),
      password
    }
  })
}

// 系统版本号
export function versionList(): Promise<IData> {
  return request<IData>({
    url: '/version/list',
    method: 'get'
  })
}