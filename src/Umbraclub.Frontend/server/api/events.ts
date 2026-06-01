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
                  blockList {
                    items {
                      content {
                        contentType
                        ... on EventsSection {
                          id
                          properties {
                            title
                            subtitle
                            button {
                              title
                              url
                              target
                              linkType
                            }
                            eventData {
                              items {
                                ... on Event {
                                  id
                                  title
                                  city
                                  date
                                  time
                                  venue
                                  description
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
            }
          }
        }`,
      }),
    })
  } catch (err: any) {
    throw createError({
      statusCode: err.statusCode ?? 502,
      statusMessage: err.message ?? 'Failed to fetch events from Compose',
    })
  }
})
