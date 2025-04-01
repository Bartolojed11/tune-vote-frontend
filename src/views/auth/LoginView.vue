<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useAuthStore } from '@/stores/authStore'
import { reactive } from 'vue'

const form = reactive({
  email: '',
  password: '',
})

const store = useAuthStore()

const handleLogin = async () => {
  await store.login(form.email, form.password)
  if (store.isAuthenticated) {
    router.push('/')
  }
}
</script>

<style lang="sass" scoped>
.login-container
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  background-color: #f4f4f4
  padding: 20px

  form
    width: 100%
    max-width: 400px
    background: white
    padding: 20px
    border-radius: 8px
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
    display: flex
    flex-direction: column
    gap: 15px

    h2
      text-align: center

    .form-group
      display: flex
      flex-direction: column

      label
        margin-bottom: 5px

      input
        padding: 10px
        border: 1px solid #ccc
        border-radius: 5px
        font-size: 16px

    button
      padding: 10px
      background-color: #007bff
      color: white
      border: none
      border-radius: 5px
      font-size: 16px
      cursor: pointer
      transition: background 0.3s

      &:hover
        background-color: #0056b3

@media (min-width: 768px)
  .login-container
    padding: 40px
</style>
