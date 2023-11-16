// Receive incoming graphQl query from client.
// validate it against the schemas.
// populate schema fields with data.
// return that data as a response.

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { makeExecutableSchema } = require('@graphql-tools/schema');

async function startServer() {
  // Defines mock data values for a specific track.
  const mocks = {
    // By default only two Tracks would be returned, we need to return 6 tracks as an array.
    Query: () => ({
      tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
      id: () => 'track_01',
      title: () => 'Astro Kitty, Space Explorer',
      author: () => {
        return {
          name: 'Grumpy Cat',
          photo:
            'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
        };
      },
      thumbnail: () =>
        'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
      length: () => 1210,
      modulesCount: () => 6,
    }),
  };

  const server = new ApolloServer({
    // seed the mock data. Asking the server to populate all the data with random data.
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);

  console.log(
    `
    Server is Running!
    Query at ${url}
    `
  );
}

startServer();
