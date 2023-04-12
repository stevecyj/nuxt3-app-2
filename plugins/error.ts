export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('vue error handler');
  };

  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error');
  });

  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error');
  });
});
