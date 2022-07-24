const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: async (_, {id}, {dataSources}) => {
      // get track details
        return dataSources.trackAPI.getTrack(id);

        // get module details for the track
        const modules = await dataSources.trackAPI.getTrackModules(id);

        // shape the data in the way the schema expects it
        return {...track, modules}
    }
  },
  Track: {
    author: ({authorId}, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  },

};

module.exports = resolvers;
