<script setup lang="ts">
import { useAlbumStore } from '@/stores/albumStore'
import { VoteAction } from '@/types/Album'

const { album_id } = defineProps<{ album_id: number }>()
const store = useAlbumStore()
</script>

<template>
  <button @click="store.delete(album_id)" class="delete-album-btn">🗑️</button>
</template>

<style lang="sass" scoped>
.delete-album-btn
    background-color: red
    color: white
    border: none
    border-radius: 4px
</style>
