<template>
  <div>Index Page</div>
  <div>
    <NButton>Hello</NButton>
  </div>
  <div>
    <van-button type="primary" @click="showToast('toast')">button</van-button>
    <VanButton type="success" @click="showNotify('notify')">button</VanButton>
    <LazyVanButton type="default">lazy button</LazyVanButton>
  </div>
  <NuxtLink to="/detail/1">Detail Page</NuxtLink>
  |
  <NuxtLink to="/hello">Hello Nuxt3</NuxtLink>
</template>
<script setup lang="ts"></script>
