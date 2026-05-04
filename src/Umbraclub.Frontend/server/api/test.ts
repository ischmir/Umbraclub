export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  try {
    return await $fetch(config.composeGraphqlEndpoint as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.composeApiKey}`,
      },
      body: JSON.stringify({
        query: `{
          cms {
            items {
              ... on TestPage {
                id
                name
                properties {
                  testProp
                }
              }
            }
          }
        }`,
      }),
    })
  } catch (err: any) {
    throw createError({
      statusCode: err.statusCode ?? 502,
      statusMessage: err.message ?? 'Failed to fetch from Compose',
    })
  }
})
