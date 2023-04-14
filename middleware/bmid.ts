export default defineNuxtRouteMiddleware((_to, _from) => {
  console.log(`具名 middleware b，影響指定頁面：${_to.path}`)
})
