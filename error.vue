<script setup lang="ts">
const props = defineProps({ error: Object })

function retry() {
  return (window.location.href = props.error!.url)
}

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div class="pt-10">
    <h1 class="text-2xl text-center mb-2">
      出了點錯 - {{ props.error?.statusCode }} {{ props.error?.statusMessage }}
    </h1>
    <van-empty description="這裡什麼都沒有">
      <van-button @click="retry">
        重試
      </van-button>
      <van-button @click="handleError">
        回到首頁
      </van-button>
    </van-empty>
  </div>
</template>
