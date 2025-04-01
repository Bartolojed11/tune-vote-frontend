import { ref } from 'vue'
import { fetchAlbumsFromAPI } from '@/repositories/albumRepository'
import type { Album, AlbumAPIResponse } from '@/types/Album'

export function useFetchAlbums() {
  const albums = ref<AlbumAPIResponse>()
  const isLoading = ref(false)

  async function getData(search: string = '', page: number = 1) {
    isLoading.value = true
    albums.value = await fetchAlbumsFromAPI(search, page)
    // console.table(albums.value)
    console.log('called again')
    console.log(albums.value)
    console.log('called again')
    isLoading.value = false
  }

  return { albums, getData, isLoading }
}
