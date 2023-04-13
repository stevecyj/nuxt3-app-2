<script lang="ts" setup>
const throwError = () => {
  throw new Error('來自 ThrowError 組件的異常❌');
};
</script>

<template>
  <div>
    <van-button @click="throwError">點我試試</van-button>
  </div>
</template>

<style scoped></style>
