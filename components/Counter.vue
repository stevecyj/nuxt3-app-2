<template>
  <div class="p-4">Counter: {{ counter }}</div>
</template>
<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>
