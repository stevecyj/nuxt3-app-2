<template>
  <div class="p-5">
    <div v-if="pending">Loading ...</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.content"></div>
      <!--      評論區-->
      <div class="py-2">
        <van-field
          v-model="value"
          type="textarea"
          autosize
          placeholder="輸入評論"
        ></van-field>
        <van-button @click="onSubmit">送出</van-button>
      </div>
    </div>
  </div>
  <p>id: {{ $route.params.id }}</p>
  <NuxtLink to="/">Index Page</NuxtLink>
</template>
<style scoped lang="scss">
p {
  color: var(--link-color);
}
</style>
<script setup lang="ts">
import { useUser } from '~/store/user';

const route = useRoute();
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`);
const { data, pending } = await useAsyncData(fetchPost);

// 登錄狀態判斷能否評論
const value = useState('comment', () => '');
const store = useUser();
const { isLogin } = storeToRefs(store);
const router = useRouter();
const onSubmit = () => {
  if (isLogin.value) {
    // 提交留言...
    value.value = '';
  } else {
    // 要求登录
    router.push('/login?callback=' + route.path);
  }
};
</script>
