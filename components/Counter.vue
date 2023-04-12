<template>
  <div class="p-4">Counter: {{ counter }}</div>
  <div class="mt-2">
    <van-button @click="counter++">+</van-button>
    <van-button @click="counter--">-</van-button>
  </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>
