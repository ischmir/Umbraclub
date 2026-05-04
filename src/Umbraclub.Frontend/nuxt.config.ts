// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    composeApiKey: process.env.COMPOSE_API_KEY,
    composeGraphqlEndpoint: process.env.COMPOSE_GRAPHQL_ENDPOINT,
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_variables.scss" as *;`,
        },
      },
    },
  },
})
