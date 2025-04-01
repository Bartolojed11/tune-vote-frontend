import { defineStore } from 'pinia'

import { loginAPI, logoutAPI } from '@/repositories/authenticationRepository'
import { userDetailsAPI } from '@/repositories/userRepository'
import type { User, LoginAPIResponse } from '@/types/Authentication'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    token: localStorage.getItem('token') || null,
    authenticated: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.authenticated,
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const response: LoginAPIResponse = await loginAPI(email, password)
        this.token = response.token
        this.user = response.data
        this.authenticated = true

        localStorage.setItem('token', this.token)
        localStorage.setItem('user_id', this.user?.user_id)
      } catch (error) {
        console.error('Login failed', error)
      }
    },

    async logout() {
      this.token = null
      this.user = {}
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      await logoutAPI()
    },

    async initializeAuth() {
      if (this.token) {
        const response: User | {} = await userDetailsAPI()

        if (!response) {
          await this.logout()
          return
        }

        this.authenticated = true
      }
    },
  },
})
