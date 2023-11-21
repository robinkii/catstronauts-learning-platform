import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  console.log('data', data);
  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => {
          return <TrackCard key={track.id} track={track} />;
        })}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
