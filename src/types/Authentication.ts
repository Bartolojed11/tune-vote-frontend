export interface LoginAPIResponse {
  message: string
  data: User | null
  token: string
  status: boolean
}

export interface User {
  user_id: number
  name: string
  email: string
  email_verified_at: string | null
  is_admin: boolean
  created_at: string | null
  updated_at: string | null
}
