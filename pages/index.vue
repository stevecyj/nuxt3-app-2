<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <h1>Index Page</h1>
    <div>
      <NButton>Hello</NButton>
    </div>
    <div>
      <van-button type="primary" @click="showToast('toast')">button</van-button>
      <VanButton type="success" @click="showNotify('notify')">button</VanButton>
      <LazyVanButton type="default">lazy button</LazyVanButton>
    </div>
    <div>
      <NuxtLink to="/detail/1">Detail Page</NuxtLink>
      |
      <NuxtLink to="/hello">Hello Nuxt3</NuxtLink>
    </div>
    <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
        post.title
      }}</NuxtLink>
      <p class="text-slate-500">發佈於： {{ post.date }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const posts = await $fetch('/api/posts');
</script>
