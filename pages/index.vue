<script setup lang="ts">
// 設定標題
useHead({
  title: '文章標題',
})

const page = ref(1)
const {
  data: posts,
  pending,
  error,
  refresh,
} = await useFetch(() => `/api/posts?page=${page.value}&size=2`)

function prev() {
  page.value--
  refresh()
}

function next() {
  page.value++
  refresh()
}
</script>

<template>
  <div class="flex items-center flex-col gap-2 py-4">
    <h1>Index Page</h1>
    <div>
      <Counter />
    </div>
    <div>
      <NButton>Hello</NButton>
    </div>
    <div>
      <van-button type="primary" @click="showToast('toast')">
        button
      </van-button>
      <VanButton type="success" @click="showNotify('notify')">
        button
      </VanButton>
      <LazyVanButton type="default">
        lazy button
      </LazyVanButton>
    </div>
    <div>
      <NuxtLink to="/detail/1">
        Detail Page
      </NuxtLink>
      |
      <NuxtLink to="/hello">
        Hello Nuxt3
      </NuxtLink>
      |
      <NuxtLink to="/counter">
        Counter
      </NuxtLink>
      |
      <NuxtLink to="/error">
        error
      </NuxtLink>
      |
      <NuxtLink to="/error-handle">
        error-handle
      </NuxtLink>
      |
      <NuxtLink to="/config">
        config
      </NuxtLink>
      |
      <NuxtLink to="/lifecycle">
        lifecycle
      </NuxtLink>
      |
      <NuxtLink to="/mid">
        mid
      </NuxtLink>
      |
      <NuxtLink to="/plugin-test">
        plugin-test
      </NuxtLink>
      |
      <NuxtLink to="/color-mode">
        color-mode
      </NuxtLink>
    </div>
    <!--    pagination -->
    <div>
      <van-button @click="prev">
        prev
      </van-button>
      <VanButton @click="next">
        next
      </VanButton>
    </div>
    <!--    處理請求錯誤 -->
    <div v-if="error" class="text-red-300">
      {{ error.message }}
    </div>
    <!--    處理 loading -->
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <NuxtLink class="text-lg" :to="`/detail/${post.id}`">
          {{ post.title }}
        </NuxtLink>
        <p class="text-slate-500">
          發佈於： {{ post.date }}
        </p>
      </div>
    </div>
  </div>
</template>
