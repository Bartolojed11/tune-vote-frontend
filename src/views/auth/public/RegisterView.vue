<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister">
      <h2>Register</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" v-model="form.password" type="password" required />
      </div>
      <div class="form-group">
        <label for="password_confirmation">Confirm password</label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { registerAPI } from '@/repositories/authenticationRepository'
import router from '@/router'

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const handleRegister = async () => {
  const response = await registerAPI(
    form.name,
    form.email,
    form.password,
    form.password_confirmation,
  )

  console.table(response)
  console.log(response)
  if (response.status) {
    router.push('/')
  }
}
</script>

<style lang="sass" scoped>
.register-container
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
  .register-container
    padding: 40px
</style>
