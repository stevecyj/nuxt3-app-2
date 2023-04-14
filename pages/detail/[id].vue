<script setup lang="ts">
import { useUser } from '~/store/user'
import type { NuxtError } from '#app'

const route = useRoute()

useHead({
  title: route.params.id as string,
})
function fetchPost() {
  return $fetch(`/api/detail/${route.params.id}`)
}
// 加入 error
const { data, pending, error } = await useAsyncData(fetchPost)
const errorMsg = computed(() => error.value as NuxtError)
watchEffect(() => {
  if (unref(error)) {
    //   如果有錯誤物件，展示錯誤頁
    showError(errorMsg.value)
  }
})

// 登錄狀態判斷能否評論
const value = useState('comment', () => '')
const store = useUser()
const { isLogin } = storeToRefs(store)
const router = useRouter()
function onSubmit() {
  if (isLogin.value) {
    // 提交留言...
    value.value = ''
  }
  else {
    // 要求登录
    router.push(`/login?callback=${route.path}`)
  }
}

// 模擬 error
// foo;
</script>

<template>
  <div class="p-5">
    <div v-if="error">
      {{ errorMsg }}
    </div>
    <div v-else-if="pending">
      Loading ...
    </div>
    <div v-else>
      <h1 class="text-2xl">
        {{ data?.title }}
      </h1>
      <div v-html="data?.content" />
      <!--      評論區 -->
      <div class="py-2">
        <van-field
          v-model="value"
          type="textarea"
          autosize
          placeholder="輸入評論"
        />
        <van-button @click="onSubmit">
          送出
        </van-button>
      </div>
    </div>
  </div>
  <p>id: {{ $route.params.id }}</p>
  <NuxtLink to="/">
    Index Page
  </NuxtLink>
</template>

<style scoped lang="scss">
p {
  color: var(--link-color);
}
</style>
