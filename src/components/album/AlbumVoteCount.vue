<script setup lang="ts">
defineProps({
  votes: Number,
})
</script>

<template>
  <span class="vote-count" :class="{ positive: votes && votes > 0, negative: votes && votes < 0 }">
    {{ votes }} votes
  </span>
</template>