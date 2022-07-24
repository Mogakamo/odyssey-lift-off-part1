import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail"

export const GET_TRACK = gql`
    query GetTrack($trackId: ID!) {
        track(id: $trackId) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            numberOfViews
            modules {
                id
                title
                length
            }
            description
        }
    }
`

const Track = ({ trackId }) => {
    const {loading, data, error} = useQuery(GET_TRACK, {
        variables: { trackId }
    })
  return <Layout>
    <QueryResult loading={loading} data={data} error={error}>
        <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>;
};

export default Track;
