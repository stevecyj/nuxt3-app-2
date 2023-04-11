<template>
  <div class="p-5">
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
    </div>
  </div>
  <p>id: {{ $route.params.id }}</p>
  <NuxtLink to="/">Index Page</NuxtLink>
</template>
<style scoped lang="scss">
p {
  color: var(--link-color);
}
</style>
<script setup lang="ts">
const router = useRoute();
const fetchPost = () => $fetch(`/api/detail/${router.params.id}`);
const { data, pending } = await useAsyncData(fetchPost);
</script>
