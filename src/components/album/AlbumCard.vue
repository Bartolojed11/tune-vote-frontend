<script setup lang="ts">
import AlbumCover from '@/components/album/AlbumCover.vue'
import AlbumDelete from '@/components/album/AlbumDelete.vue'
import AlbumArtist from '@/components/album/AlbumArtist.vue'
import AlbumTitle from '@/components/album/AlbumTitle.vue'
import AlbumVoteButton from '@/components/album/AlbumVoteButton.vue'
import AlbumVoteCount from '@/components/album/AlbumVoteCount.vue'

import { type Album, VoteAction } from '@/types/Album'

defineProps<{ album: Album; actions: ('delete' | 'add')[] }>()
</script>

<template>
  <section class="album-card">
    <div class="album-card__top">
      <AlbumCover :image="album.album_cover" />
      <div class="info">
        <AlbumTitle :title="album.song_name" />
        <AlbumArtist :artist_name="album.artist_name" />
      </div>
    </div>

    <div class="album-card__bottom">
      <AlbumVoteCount :votes="album.votes_sum_vote" /> {{ actions }}
      <div class="votes-action">
        <AlbumVoteButton :action="VoteAction.UPVOTE" :album_id="album.album_id" />
        <AlbumVoteButton :action="VoteAction.DOWNVOTE" :album_id="album.album_id" />
        <AlbumDelete :album_id="album.album_id" v-if="'delete' in actions" />
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.album-card
  margin-bottom: 12px
  border: 1px solid gray
  border-radius: 8px
  padding: 8px 12px
  width: 100%

  &__top
    display: flex
    width: 100%
    gap: 12px
    margin-bottom: 8px

    .info
      display: flex
      flex-direction: column

  &__bottom
    display: flex
    gap: 4px
    justify-content: flex-end
    .votes-action
      display: flex
      gap: 4px
</style>
