export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    vueApp.config.globalProperties.$alert = (msg: string) => {
      showNotify({ type: 'warning', message: msg });
    };
  });
});
