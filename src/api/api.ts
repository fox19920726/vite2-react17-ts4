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

/*
* 登录 name获取那边业务上的写法是打了？的，是不定向的
* 但是这里是确定定向的，就冲突了，所以这边也改不定性得了
*/
export function login(name: string | undefined, password: string | undefined): Promise<IData> {
  return request<IData>({
    url: '/login',
    method: 'post',
    data: {
      name: name?.trim(),
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