const { ApolloServer, gql } = require("apollo-server");
const categories = require("./category");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each.
    type Query
    `;

const server = new ApolloServer({
    typeDefs: [typeDefs, categories.typeDef],
    resolvers: [categories.resolvers]
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});