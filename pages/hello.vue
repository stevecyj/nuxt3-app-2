<script lang="ts" setup>
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
