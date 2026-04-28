export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  return $fetch(config.composeGraphqlEndpoint as string, {
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
}`
    }),
  })
})
