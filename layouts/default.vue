<template>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

<style scoped>
.avatar {
  width: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>
<script setup lang="ts">
import Navbar from '~/components/Nav/Navbar.vue';
</script>
