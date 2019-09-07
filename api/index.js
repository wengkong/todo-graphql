const { ApolloServer, gql } = require ('apollo-server-micro')

const typeDefs = gql`
type Query {
    info: String!
}
`

const resolvers = {
    Query: {
        info: () => `This is the API for todo application`
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
})

module.exports = server.createHandler({ path: "/api" });

// server.listen().then(({url}) => {
//     console.log(`🚀  Server ready at ${url}`)
// })

