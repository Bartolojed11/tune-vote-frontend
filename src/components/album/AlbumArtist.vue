<template>
  <span class="album-artist">By: {{ artist_name }}</span>
</template>
<script setup lang="ts">
defineProps({
  artist_name: String,
})
</script>
