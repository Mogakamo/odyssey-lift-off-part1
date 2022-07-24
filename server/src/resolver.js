const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: async (_, { id }, { dataSources }) => {
      // get track details
      const track = await dataSources.trackAPI.getTrack(id);


      // get module details for the track
      const modules = await dataSources.trackAPI.getTrackModules(id);

      // shape the data in the way the schema expects it
      return { ...track, modules };
    },
  },

  Mutation: {
    incrementTrackViews: async (_, {id}, {dataSources}) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
      return {
        code: 200,
        success: true,
        message: `Successfully incremented track ${id}'s number of views`,
        track
      }
      } catch (e) {
        return {
          code: e.extensions.response.status,
          success: false,
          message: e.extensions.response.body,
          track: null
        }
      }
    }
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
