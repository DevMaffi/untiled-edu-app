import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_PROJECT_API,
  {
    headers: {
      Authorization: import.meta.env.VITE_HYGRAPH_AUTH_TOKEN,
    },
  }
)
