// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-expect-error
  app: {
    head: {
      // title: 'space',
      meta: [
        { name: 'description', content: 'focus on front end' },
        { name: 'keywords', content: 'nuxt,vue,ts,frontend' },
      ],
    },
  },
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
  ssr: false,
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
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'dark',
  },
  vant: {},
})
