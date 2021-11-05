import request from '@/utils/request'
import { IData } from '@/tsTypes/userInterface.d'
import { IAsyncRoute } from '@/tsTypes/menuInterface.d'

// AxiosResponse

export function getUserInfo(token: string): Promise<IData> {
  return request<IData>({
    url: '/user/info',
    method: 'get',
    params: token
  })
}

export function login(userName: string, password: string): Promise<IData> {
  return request<IData>({
    url: '/login',
    method: 'post',
    data: {
      userName: userName?.trim(),
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

// 退出登陆
export function goExit(): Promise<IData> {
  return request<IData>({
    url: '/logout',
    method: 'post'
  })
}