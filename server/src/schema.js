//import gql which is a temperate literal used for wrapping GraphQl strings.
//It will convert graphQl schemas into a readable format for the apollo server
const gql = require('graphql-tag');

const typeDefs = gql`
  # This is where the schema definitions go.
  type Query {
    "Need to get tracks to display for the homepage"
    tracksForHome: [Track!]
  }

  "A track is a group of modules that teach a specific topic"
  type Track {
    "pk"
    id: ID!
    "name of the track"
    title: String!
    "author of the track"
    author: Author!
    "picture that the track will display"
    thumbnail: String
    "the length of the track"
    length: Int
    "how many modules in the track"
    modulesCount: Int
  }

  "This shows the author of a specific module or track"
  type Author {
    "pk"
    id: ID!
    "author first and last name"
    name: String!
    "picture of the author"
    photo: String
  }
`;

module.exports = typeDefs;
