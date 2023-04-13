<script lang="ts" setup>
// get appConfig
const appConfig = useAppConfig();

// get env
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);

if (process.server) {
  console.log('API secret:', runtimeConfig.apiSecret);
}
</script>

<template>
  <div :class="{ dark: appConfig.theme.dark }">
    <p
      class="bg-blue-300 dark:bg-slate-600 dark:text-slate-200"
      @click="appConfig.title = 'hello'"
    >
      appConfig: {{ appConfig.title }}
    </p>
    <label for="">
      dark mode:
      <van-switch id="toggle" v-model="appConfig.theme.dark" />
    </label>
  </div>
</template>

<style scoped></style>
