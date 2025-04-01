<template>
  <span class="album-name">{{ title }}</span>
</template>
<script setup lang="ts">
defineProps({
  title: String,
})
</script>
