<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// Define props with TypeScript types
defineProps<{
  currentPage: number
  totalPages: number
}>()

// Define emitted events
defineEmits<{
  (event: 'prev-page'): void
  (event: 'next-page'): void
}>()
</script>

<template>
  <nav class="pagination">
    <button class="pagination-button" @click="$emit('prev-page')" :disabled="currentPage === 1">
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      class="pagination-button"
      @click="$emit('next-page')"
      :disabled="currentPage === totalPages"
    >
      Next
    </button>
  </nav>
</template>

<style lang="sass" scoped>
.pagination
  display: flex
  flex-wrap: wrap
  gap: 8px
  align-items: center

.pagination-button
  padding: 10px 15px
  border: none
  border-radius: 5px
  cursor: pointer
</style>
