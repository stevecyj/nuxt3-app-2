<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - JOJO's space` : 'JOJO\'s space'
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <!--    路由出口 -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
a{
  color:white;
  text-decoration: none;
}
</style>
