const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }
  
  "A track is a group of modules that teaches a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display data in track card"
    thumbnail: String
    "The track's approximate length to complete in minutes"
    length: Int
    "The number of modules in the track"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times the track has been viewed"
    numberOfViews: Int
    "The track's complete array of modules"
    modules: [Module!]!
  }

  "Author of a complete track"
  type Author {
    id: ID!
    "The author's name"
    name: String!
    "The author's image"
    photo: String
  }

  "A module is a single unit of teaching. Multiple modules can be part of a track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length in minutes"
    length: Int
  }


  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represent the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    track: Track
  }
`;


module.exports = typeDefs;
