<script setup lang="ts">
import AlbumCard from '@/components/album/AlbumCard.vue'
import AlbumSearch from '@/components/album/AlbumSearch.vue'
import Pagination from '@/components/Pagination.vue'
import { onMounted } from 'vue'
import { useAlbumStore } from '@/stores/albumStore'

const store = useAlbumStore()

// Fetch albums on mount
onMounted(() => {
  store.fetchAlbums()
})
</script>

<template>
  <div class="album-container">
    <AlbumSearch />
    <AlbumCard
      v-for="album in store.albumsData"
      :album="album"
      :key="album.album_id"
      :actions="store.adminActions"
    />
    <Pagination
      @prev-page="store.prevPage"
      @next-page="store.nextPage"
      :current-page="store.currentPage"
      :total-pages="store.totalPages"
    />
  </div>
</template>

<style lang="sass" scoped>
.album-container
  display: flex
  flex-direction: column
  align-items: center
</style>
