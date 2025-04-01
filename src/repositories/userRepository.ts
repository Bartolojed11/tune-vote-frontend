import type { User } from '@/types/Authentication'
import { api } from '@/utils/apiFetch'

export async function userDetailsAPI(): Promise<User | {}> {
  try {
    return await api.get<User>('user', {})
  } catch (err) {
    return {}
  }
}
