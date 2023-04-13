<script lang="ts" setup>
//get nuxtApp
const nuxtApp = useNuxtApp();
const date1 = nuxtApp.$format();
const date2 = nuxtApp.$format(new Date(), 'YYYYMMDD');
</script>

<template>
  <div>
    <ClientOnly>
      <p>{{ date1 }}</p>
      <p>{{ date2 }}</p>
    </ClientOnly>
    <NuxtLink to="/">Index Page</NuxtLink>
  </div>
</template>

<style scoped></style>
