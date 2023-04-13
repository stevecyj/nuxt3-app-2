<script lang="ts" setup>
const instance = getCurrentInstance();
onMounted(() => {
  instance?.proxy?.$alert('component mounted!');
});
</script>

<template>
  <div>
    <NuxtLink to="/">Index Page</NuxtLink>
  </div>
</template>

<style scoped></style>
