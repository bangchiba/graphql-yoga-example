import { GraphQLServer } from 'graphql-yoga'
import typeDefs from 'graphql/typeDefs'
import resolvers from 'graphql/resolvers'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

const PORT = process.env.PORT || 4000

const options = {
  port: PORT
}

server.start(options, () => {
  console.log(`Server is running on localhost:${PORT}`)
})