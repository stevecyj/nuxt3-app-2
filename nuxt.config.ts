// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  runtimeConfig: {
    //   只用於 server 的 key
    apiSecret: '',
    // client 可訪問
    public: {
      apiBase: '',
    },
  },
  imports: {
    dirs: ['store/**'],
  },
  // ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    '@vant/nuxt',
    // 引入 Pinia
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
});
