import { get, post } from '@/utils/http'

enum URL {
  login = '/user/login',
  logout = '/user/logout'
}

interface LoginRes {
  token: string
}

export interface LoginParam {
  username: string
  password: string
}

const login = async (data: LoginParam) => post({ url: URL.login, data })
const logout = async () => post<LoginRes>({ url: URL.logout })

export { login, logout }
