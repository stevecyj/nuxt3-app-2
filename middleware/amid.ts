export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名 middleware a，影響指定頁面：' + to.path);
});
