<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div class="image-container">
    <img :src="image" alt="Album Image" class="album-image" loading="lazy" />
  </div>
</template>

<style lang="sass" scoped>
.image-container
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  max-width: 80px
  // Adjust width as needed
  overflow: hidden
  border-radius: 12px
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2)

.album-image
  width: 100%
  height: auto
  object-fit: cover
  border-radius: 12px
  transition: opacity 0.3s ease-in-out

  &.loading
    opacity: 0.5

  &.loaded
    opacity: 1
</style>
