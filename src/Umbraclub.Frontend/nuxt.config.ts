// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    composeApiKey: process.env.COMPOSE_API_KEY,
    composeGraphqlEndpoint: process.env.COMPOSE_GRAPHQL_ENDPOINT,
  }
})
