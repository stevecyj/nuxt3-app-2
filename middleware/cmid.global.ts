export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全域 middleware c，影響所有頁面：');
});
