export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名 middleware b，影響指定頁面：' + to.path);
});
