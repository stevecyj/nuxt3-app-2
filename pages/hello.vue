<script setup lang="ts">
const { message } = await $fetch('/api/hello')
</script>

<template>
  <div>
    {{ message }}
  </div>
  <NuxtLink to="/">
    Index Page
  </NuxtLink>
</template>
