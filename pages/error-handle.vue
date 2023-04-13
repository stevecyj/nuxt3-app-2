<script lang="ts" setup></script>

<template>
  <NuxtErrorBoundary>
    <!--    預設插槽顯示正常內容-->

    <!--    觸發錯誤-->
    <ThrowError />

    <!--    error 插槽顯示錯誤時內容-->
    <template #error="{ error }">
      <p class="my-4 text-xl text-gray-500">發生了一些錯誤 {{ error }}</p>
      <van-button type="success" @click="error.value = null"
        >修正錯誤</van-button
      >
    </template>
  </NuxtErrorBoundary>
</template>

<style scoped></style>
