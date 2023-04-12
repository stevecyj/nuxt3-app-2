<template>
  <div class="p-4">全域 Counter: {{ counter }}</div>
  <div class="p-4">局部 CounterRef: {{ counter2 }}</div>
  <div class="mt-2">
    <van-button
      @click="
        counter++;
        counter2++;
      "
      >+</van-button
    >
    <van-button
      @click="
        counter--;
        counter2--;
      "
      >-</van-button
    >
  </div>
</template>
<script setup lang="ts">
import { useCounter } from '~/store/counter';
// 全域 state
const store = useCounter();
const { value: counter } = storeToRefs(store);

// 局部 state
const counter2 = ref(1);
</script>
