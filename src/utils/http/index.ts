import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { ApiResponse, resolveResError } from './common'
import { TokenPrefix, getToken } from '@/utils/auth'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 1000
})

/** 请求拦截处理 */
function reqResolve(config: InternalAxiosRequestConfig) {
  // 处理不需要token的请求
  const accessToken = getToken()
  if (accessToken) {
    config.headers.authorization = TokenPrefix + accessToken
  }
  return config
}

function reqReject(error: AxiosError) {
  return Promise.reject(error)
}

/** 响应拦截处理 */
function resResolve(response: AxiosResponse) {
  const { data, status, statusText } = response
  if (status === 200) {
    return Promise.resolve(data)
  } else {
    // 处理自定义 code 异常信息
    const code = data?.code ?? status
    const message = resolveResError(code, data?.message ?? statusText)
    window.$message?.error(message)
    return Promise.reject({ code, message, error: data ?? response })
  }
}

function resReject(error: AxiosError) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    window.$message?.error(message)
    return Promise.reject({ code, message, error })
  }
  let code = error.response?.status
  let message = error.message
  message = resolveResError(code, message)
  /** 需要错误提醒 */
  window.$message?.error(message)
  return Promise.reject({
    code,
    message,
    error: error.response?.data || error.response
  })
}

service.interceptors.request.use(reqResolve, reqReject)
service.interceptors.response.use(resResolve, resReject)

/**
 *
 * @param config
 * @returns
 */
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config
  return new Promise((resolve) => {
    service.request<any, AxiosResponse<ApiResponse>>(conf).then((res: AxiosResponse<ApiResponse>) => {
      const { data } = res
      resolve(data as T)
    })
  })
}

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' })
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' })
}

export function put<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'put' })
}

export function del<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'delete' })
}

export default request
