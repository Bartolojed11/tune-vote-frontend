<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import router from './router'

const store = useAuthStore()
// TODO: Do better ui/ux
const handleLogout = async () => {
  await store.logout()
  router.push('/login')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Voting</RouterLink>
        <RouterLink v-if="!store.isAuthenticated" to="/register">Register</RouterLink>
        <RouterLink v-if="!store.isAuthenticated" to="/login">Login</RouterLink>
        <button v-if="store.isAuthenticated" type="button" class="logout-btn" @click="handleLogout">
          Logout
        </button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: no-wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.logout-btn {
  background-color: unset;
  color: var(--color-text);
  border: unset;
}
</style>
