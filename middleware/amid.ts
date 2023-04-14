export default defineNuxtRouteMiddleware((_to, _from) => {
  console.log(`具名 middleware a，影響指定頁面：${_to.path}`)
})
