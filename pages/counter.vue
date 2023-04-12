<template>
  <div class="p-4">
    <NuxtLink to="/">Index</NuxtLink>
    <div>全域 count: {{ count }}</div>
    <div>局部 state, Counter: {{ counter }}</div>
    <div>局部 state, CounterRef: {{ counterRef }}</div>
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
    <hr />
    <Counter />
    <hr />
    <Counter />
  </div>
</template>
<script setup lang="ts">
// 局部state
const counterRef = ref(Math.round(Math.random() * 1000));
const counter = useState('counter', () => Math.round(Math.random() * 1000));

// 全域state, composable
const count = useCounter();
</script>
