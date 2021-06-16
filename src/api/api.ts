import request from '@/utils/request'
import { IData, IUserInfo } from '@/types/userInterface'
import { IAsyncRoute } from '@/types/menuInterface'

// AxiosResponse

export function getUserInfo(token: string): Promise<IData> {
  return request<IData>({
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

// 获取异步路由

export function getAsyncRoutes(): Promise<IAsyncRoute> {
  return request<IAsyncRoute>({
    url: '/getAsyncRoutes',
    method: 'get'
  })
}