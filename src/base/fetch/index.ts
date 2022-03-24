/**
 * @file 接口封装服务
 */
import config from './config'
import axios, { AxiosRequestConfig } from 'axios'
import errorWarning from './errorWarning'

interface FetchType extends AxiosRequestConfig {
  timeout?: number
  baseURL?: string
  headers: any
  transformRequest: any
}

export const fetch = function (config: FetchType) {
  return axios.create(config) // 创建axios实例
}

fetch(config).interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    // 请求拦截器
    const params = config.params || {}
    params.clienttype = 53
    params.time = +new Date()
    config.params = params
    return config // config为发送请求前做某事
  },
  (error) => Promise.reject(error)
) // 请求错误时做某事

// 返回状态判断
fetch(config).interceptors.response.use(
  (res) => {
    // 响应拦截器
    return errorWarning(res)
  },
  (error) => Promise.reject(error)
)
