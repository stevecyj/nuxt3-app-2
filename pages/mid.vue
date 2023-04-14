<script lang="ts" setup>
definePageMeta({
  // middleware(to, from) {
  //   console.log('匿名 middleware，具體頁面執行');
  // },

  middleware: ['amid', 'bmid'],
})
</script>

<template>
  <div>
    <h1>Mid Page</h1>
    <NuxtLink to="/">
      Index Page
    </NuxtLink>
  </div>
</template>

<style scoped></style>
