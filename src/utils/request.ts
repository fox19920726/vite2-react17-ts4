import { message } from 'antd'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken, removeToken } from './cookie'
// const isProduction = 'production'
// const isServer = 'local'

const service = axios.create({
  baseURL: '',
  timeout: 10000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()

    token && (config.headers['X-Token'] = token)

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
    const { code } = response.data
    if (code && code !== 200) {
      /*
      * 未登录状态下应该：
      * 1、提示未登录
      * 2、删除本地cookie的token记录
      * 3、刷新界面会自动跳转到登陆页
      */
      if (code === 401) {
        message.error({ content: '请先登陆～' })
        removeToken()
        window.location.reload()
      }
      console.log('error')
      return Promise.reject(new Error(response.data.msg || 'Error'))
    }
    return response
  },
  (error) => {
    const { response } = error
    const { status } = response
    // const { errmsg } = response.data
    if (status === 401) {
      message.error({ content: '请先登陆～' })
      removeToken()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

// export default service.request

export default async <T>(c: AxiosRequestConfig): Promise<T> => {
  try{
    const { data } = await service.request<T>(c)
    return data
  } catch (e) {
    console.log(e)
    message.error({ content: '哎呀，出错啦～' })
    // 我觉得我学到精髓了，笑死
    return {} as T
  }
}