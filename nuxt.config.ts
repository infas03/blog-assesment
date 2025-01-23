// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    '@nuxt/test-utils/module'
  ],
  piniaPluginPersistedstate: {
    key: 'prefix_%id_postfix',
    storage: 'localStorage',
    cookieOptions: {
      sameSite: 'lax',
    },
    debug: true,
  },
  runtimeConfig: {
    apiSecret: 'default-secret',
    public: {
      apiUrl: process.env.NUXT_API_URL,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },
  app: {
    head: {
      title: 'Events'
    },
  },
  nitro: {
    preset: 'vercel',
  },
});
