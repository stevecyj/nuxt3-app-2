import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp);
  //   use lifecycle hook
  // nuxtApp.hook('app:error', (err) => {
  //   //   do
  // });
  //
  // //   vue instance
  // nuxtApp.vueApp.config.globalProperties.$xxx = () => {
  //   //   global
  // };

  //   provide global prop, method
  nuxtApp.provide('format', (date?: Date, template?: string) => {
    return dayjs(date).format(template);
  });
});
