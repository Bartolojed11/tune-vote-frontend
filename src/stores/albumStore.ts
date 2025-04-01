import { defineStore } from 'pinia'
import { type Album, type AlbumAPIData, type AlbumAPIResponse, VoteAction } from '@/types/Album'
import { useFetchAlbums } from '@/composables/album/useFetchAlbum'
import { useDeleteAlbum } from '@/composables/album/useDeleteAlbum'
import { useVoteAlbum } from '@/composables/album/useVoteAlbum'

export const useAlbumStore = defineStore('album', {
  state: () => ({
    albums: [] as Album[],
    searchQuery: '',
    appliedSearchQuery: '',
    currentPage: 0,
    itemsPerPage: 5,
    filteredAlbums: [],
    response: null,
    totalPage: 1,
    adminActions: [] as ('delete' | 'add')[],
  }),

  getters: {
    filteredAlbums(state): Album[] {
      return state.albums.filter((album) =>
        album.song_name.toLowerCase().includes(state.appliedSearchQuery.toLowerCase()),
      )
    },

    totalPages(state): number {
      return state.totalPage
    },

    albumsData(state): Album[] {
      return state.albums
    },

    paginatedAlbums(state): Album[] {
      const start = (state.currentPage - 1) * state.itemsPerPage
      return state.filteredAlbums.slice(start, start + state.itemsPerPage)
    },
  },

  // AlbumAPIResponse
  actions: {
    async delete(album_id: number) {
      const { deleteAlbum } = useDeleteAlbum()
      await deleteAlbum(album_id)
      await this.fetchAlbums()
    },
    async fetchAlbums(page: number = 1) {
      const { albums, getData } = useFetchAlbums()
      const offset = page
      await getData(this.searchQuery, offset)
      const response: AlbumAPIResponse | undefined = albums.value
      this.albums = response?.data?.data ?? []
      this.adminActions = response?.actions ?? []
      this.currentPage = response?.data?.current_page ?? 1
      this.totalPage = response?.data?.total ?? 1
    },

    applySearch() {
      this.appliedSearchQuery = this.searchQuery
      this.currentPage = 1
    },

    resetSearch() {
      this.searchQuery = ''
      this.appliedSearchQuery = ''
      this.currentPage = 1
    },

    async vote(album_id: number, vote_action: VoteAction) {
      const { vote } = useVoteAlbum()
      await vote(album_id, vote_action)
      await this.fetchAlbums()
    },

    async prevPage() {
      await this.fetchAlbums(this.currentPage - 1)
    },

    async nextPage() {
      await this.fetchAlbums(this.currentPage + 1)
    },
  },
})
