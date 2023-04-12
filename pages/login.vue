<template>
  <div>
    <van-button @click="onLogin">登入</van-button>
  </div>
</template>
<script setup lang="ts">
import { useUser } from '~/store/user';
const store = useUser();
const { isLogin } = storeToRefs(store);
const router = useRouter();
const route = useRoute();
const onLogin = () => {
  isLogin.value = true;
  const callback = route.query.callback?.toString() || '';
  router.push(callback);
};
</script>
