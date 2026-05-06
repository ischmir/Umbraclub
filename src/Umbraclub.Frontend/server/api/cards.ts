export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (!config.composeGraphqlEndpoint || !config.composeApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Missing Compose configuration' })
  }

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
              ... on ClubHome {
                id
                properties {
                  blocks {
                    items {
                      content {
                        contentType
                        ... on CardsSectionInline {
                          id
                          properties {
                            title
                            subtitle
                            cardOneTitle
                            cardOneSubtitle
                            cardOneButton {
                              title
                              url
                              target
                              linkType
                            }
                            cardTwoTitle
                            cardTwoSubtitle
                            cardTwoButton {
                              title
                              url
                              target
                              linkType
                            }
                            cardThreeTitle
                            cardThreeSubtitle
                            cardThreeButton {
                              title
                              url
                              target
                              linkType
                            }
                          }
                        }
                      }
                    }
                  }
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
      statusMessage: err.message ?? 'Failed to fetch cards from Compose',
    })
  }
})
