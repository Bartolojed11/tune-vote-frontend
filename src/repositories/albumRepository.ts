// TODO: Make this file class

import { type AlbumAPIResponse, type VoteAction, type CommonAPIResponse } from '@/types/Album'
import { api } from '@/utils/apiFetch'

export async function fetchAlbumsFromAPI(
  search: string = '',
  page: number = 1,
): Promise<AlbumAPIResponse> {
  try {
    const response: AlbumAPIResponse = await api.get(
      `public/albums/search?search=${search}&page=${page}`,
    )

    return response
  } catch (error) {
    console.error('Error fetching albums:', error)
    return { message: '', data: null, status: false }
  }
}

export async function sendVoteToAPI(
  album_id: number,
  vote: VoteAction,
): Promise<CommonAPIResponse> {
  try {
    return await api.post(`public/albums/${album_id}/vote`, {
      vote: vote,
    })
  } catch (error) {
    console.error('Error sending vote:', error)
    return { message: '', data: null, status: false }
  }
}

export async function deleteAlbumFromAPI(album_id: number): Promise<CommonAPIResponse> {
  try {
    return await api.delete(`admin/albums/${album_id}`)
  } catch (error) {
    console.error('Error deleting vote:', error)
    return { message: '', data: null, status: false }
  }
}
