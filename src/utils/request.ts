import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken, removeToken } from './cookie'

// const isProduction = 'production'
// const isServer = 'local'

const service = axios.create({
  baseURL: '',
  timeout: 10000
})

const cancelFunc: { [key: string]: () => void } = {}
const cancelCheckUrlList: string[] = []
const noAuthorizationUrls: string[] = []

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()

    if (token) {
      if (!noAuthorizationUrls.includes(config.url)) {
        config.headers['X-Token'] = token
      }
    }

    if (cancelCheckUrlList.indexOf(config.url) !== -1) {
      config.cancelToken = new axios.CancelToken((c) => {
        if (typeof cancelFunc[config.url] === 'function') {
          cancelFunc[config.url]()
        }
        cancelFunc[config.url] = c
      })
    }

    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 访问接口成功后的code码需要全公司统一，用来统一处理每个code对应的策略
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (typeof cancelFunc[response.config.url] === 'function') {
      delete cancelFunc[response.config.url]
    }
    // 访问接口成功后的code码需要全公司统一，用来统一处理每个code对应的策略
    const { code } = response.data
    if (code && code !== 200) {
      // 未登录状态下应该：1、提示未登录 2、删除本地cookie的token记录 3、跳转至登陆界面
      if (code === 401) {
        removeToken()
      }
      console.log('error')
      return Promise.reject(new Error(response.data.msg || response.message || 'Error'))
    }
    return response
  },
  (error) => {
    const { response } = error
    const { status } = response
    // const { errmsg } = response.data
    if (status === 401) {
      // 未登录状态下应该：1、提示未登录 2、删除本地cookie的token记录 3、跳转至登陆界面
      console.log('error')
    }
    return Promise.reject(error)
  }
)

// export default service.request

export default async <T>(c: AxiosRequestConfig): Promise<T> => {
  const { data } = await service.request<T>(c)
  return data
}