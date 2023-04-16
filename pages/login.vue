<script setup lang="ts">
import { useUser } from '~/store/user'

const store = useUser()
const { isLogin } = storeToRefs(store)
const router = useRouter()
const route = useRoute()
const email = useState(() => '')

function onLogin() {
  // isLogin.value = true
  // const callback = route.query.callback?.toString() || ''
  // router.push(callback)

  $fetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
    },
  })
    .then((user) => {
      console.log(user)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div>
    <NInput v-model:value="email" />
    <NButton @click="onLogin">
      登录
    </NButton>
  </div>
</template>
