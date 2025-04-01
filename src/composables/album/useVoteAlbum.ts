import { ref } from 'vue'
import { sendVoteToAPI } from '@/repositories/albumRepository'
import type { VoteAction, AlbumAPIResponse } from '@/types/Album'

export function useVoteAlbum() {
  const isLoading = ref(false)

  async function vote(album_id: number = 1, vote_ation: VoteAction) {
    isLoading.value = true
    await sendVoteToAPI(album_id, vote_ation)
    isLoading.value = false
  }

  return { vote, isLoading }
}
