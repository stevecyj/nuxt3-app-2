<template>
  <div class="p-5">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const { title, content } = await $fetch(`/api/detail/${router.params.id}`);
</script>
