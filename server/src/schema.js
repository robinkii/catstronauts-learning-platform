//import gql which is a temperate literal used for wrapping GraphQl strings.
//It will convert graphQl schemas into a readable format for the apollo server
const gql = require('graphql-tag');

const typeDefs = gql`
  # This is where the schema definitions go.

  "A track is a group of modules that teach a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: int
    modulesCount: int
  }
`;

module.exports = typeDefs;
