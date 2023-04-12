<template>
  <div>
    <van-button @click="onLogin">登入</van-button>
  </div>
</template>
<script setup lang="ts">
const isLogin = useLogin();
const router = useRouter();
const route = useRoute();
const onLogin = () => {
  isLogin.value = true;
  const callback = route.query.callback?.toString() || '';
  router.push(callback);
};
</script>
