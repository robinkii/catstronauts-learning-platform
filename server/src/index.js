// Receive incoming graphQl query from client.
// validate it against the schemas.
// populate schema fields with data.
// return that data as a response.

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema');

async function startServer() {
  const server = new ApolloServer({ typeDefs });
  const { url } = await startStandaloneServer(server);

  console.log(
    `
    Server is Running!
    Query at ${url}
    `
  );
}

startServer();
