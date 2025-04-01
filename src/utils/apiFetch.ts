export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const getToken = () => localStorage.getItem('token')

  let token = getToken()

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }

  // TODO: Move this to .env, I have no enough time doing code optimization for now
  const response = await fetch(`http://localhost:8000/api/${endpoint}`, config)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  return response.json()
}

export const api = {
  get: <T>(endpoint: string, params?: Record<string, any>) => {
    const query = params ? `?${new URLSearchParams(params).toString()}` : ''
    return apiFetch<T>(`${endpoint}${query}`, { method: 'GET' })
  },

  post: <T>(endpoint: string, body: Record<string, any>) =>
    apiFetch<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  delete: <T>(endpoint: string) => apiFetch<T>(endpoint, { method: 'DELETE' }),
}
