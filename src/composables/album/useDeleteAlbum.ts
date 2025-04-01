import { ref } from 'vue'
import { deleteAlbumFromAPI } from '@/repositories/albumRepository'

export function useDeleteAlbum() {
  const isLoading = ref(false)

  async function deleteAlbum(album_id: number) {
    isLoading.value = true
    await deleteAlbumFromAPI(album_id)
    isLoading.value = false
  }

  return { deleteAlbum, isLoading }
}
