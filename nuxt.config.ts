// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
  ],
  piniaPluginPersistedstate: {
    key: 'prefix_%id_postfix',
    storage: 'localStorage',
    cookieOptions: {
      sameSite: 'lax',
    },
    debug: true,
  },
});
