// 自定义响应
export interface ApiResponse<T = any> {
  code: number | string
  data: T
  message: string
  status: string | number
}

export const resolveResError = (code: number | string | undefined, message = ''): string => {
  /** http status code */
  /** notice text */
  switch (code) {
    case 400:
      message = 'Request Error'
      break
    case 401:
      message = '未授权, 是否重新登录'
      break
    case 403:
      message = '请求被拒绝'
      break
    case 404:
      message = '请求资源或接口不存在'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器发生异常'
      break
    case 501:
      message = '承载服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务暂不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = '暂不支持的 HTTP 版本'
      break
    default:
      message = '未知错误'
  }
  return message
}
