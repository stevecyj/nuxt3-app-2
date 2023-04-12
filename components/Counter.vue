<template>
  <div class="p-4">Counter: {{ counter }}</div>
  <div class="p-4">CounterRef: {{ counterRef }}</div>
  <div class="mt-2">
    <van-button
      @click="
        counter++;
        counterRef++;
      "
      >+</van-button
    >
    <van-button
      @click="
        counter--;
        counterRef--;
      "
      >-</van-button
    >
  </div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random() * 1000));
</script>
