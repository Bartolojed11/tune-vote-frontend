import type { LoginAPIResponse } from '@/types/Authentication'
import type { CommonAPIResponse } from '@/types/Album'
import { api } from '@/utils/apiFetch'

export async function loginAPI(email: string, password: string): Promise<LoginAPIResponse> {
  try {
    const data = await api.post<LoginAPIResponse>('auth/login', {
      email,
      password,
    })

    return data
  } catch (err) {
    return { message: '', data: null, token: '', status: false }
  }
}

export async function logoutAPI(): Promise<CommonAPIResponse> {
  try {
    return await api.post<CommonAPIResponse>('auth/logout', {})
  } catch (err) {
    return { message: '', data: null, status: false }
  }
}

export async function registerAPI(
  email: string,
  name: string,
  password: string,
  password_confirmation: string,
): Promise<CommonAPIResponse> {
  try {
    const data = await api.post<CommonAPIResponse>('auth/register', {
      email,
      name,
      password,
      password_confirmation,
    })

    return data
  } catch (err) {
    console.log(err)
    return { message: '', data: null, status: false }
  }
}
