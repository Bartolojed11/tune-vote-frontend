export interface Album {
  album_id: number
  song_name: string
  artist_name: string
  album_cover: string
  votes_sum_vote: number
  voted: number | null // 1 for upvote, -1 for downvote, 0 for none
}

export interface AlbumAPIResponse {
  message: string
  data: AlbumAPIData | null
  actions: ('delete' | 'add')[] | null
  status: boolean
}

export interface AlbumAPIData {
  current_page: number
  total: number | null
  data: Album[] | null
}

export enum VoteAction {
  UPVOTE = 'UP',
  DOWNVOTE = 'DOWN',
}

// TODO: Move this outside this file
export interface CommonAPIResponse {
  message: string
  data: any
  status: boolean
}
