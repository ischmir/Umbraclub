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
                name
                createDate
                updateDate
                route {
                  path
                }
                properties {
                  siteTitle
                  metaDescription
                  logoText
                  companyName
                  companyEmail
                  companyPhone
                  headerNavigation {
                    title
                    url
                    target
                  }
                  footerNavigation {
                    title
                    url
                    target
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
      statusMessage: err.message ?? 'Failed to fetch navigation from Compose',
    })
  }
})
