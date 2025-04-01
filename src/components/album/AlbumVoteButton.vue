<script setup lang="ts">
import { useAlbumStore } from '@/stores/albumStore'
import { VoteAction } from '@/types/Album'

const { album_id, action } = defineProps<{ album_id: number; action: VoteAction }>()
const store = useAlbumStore()
let icon = action == VoteAction.UPVOTE ? '👍' : '👎'
</script>

<template>
  <button @click="store.vote(album_id, action)" class="vote-btn">{{ icon }}</button>
</template>
