<script setup lang="ts">
import { useAlbumStore } from '@/stores/albumStore'
const store = useAlbumStore()
</script>

<template>
  <div class="search-container">
    <input
      v-model="store.searchQuery"
      type="text"
      placeholder="Search albums..."
      class="search-bar"
    />
    <button @click="store.applySearch" class="search-btn">Search</button>
    <button @click="store.resetSearch" class="reset-btn">Reset</button>
  </div>
</template>
<style lang="sass" scoped>
.search-container
  display: flex
  gap: 10px
  margin-bottom: 15px
  flex-wrap: wrap

.search-bar
  width: 100%
  max-width: 300px
  padding: 10px
  border: 1px solid #ccc
  border-radius: 5px

.search-btn,
.reset-btn
  padding: 10px 15px
  border: none
  border-radius: 5px
  cursor: pointer

.search-btn
  background-color: #007bff
  color: white

  &:hover
    background-color: #0056b3

.reset-btn
  background-color: #fff
  color: #000

  &:hover
    background-color: #e2e2e2
</style>
