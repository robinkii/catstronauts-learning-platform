import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.systemMessage}`;

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
  const { loading, error, data } = useQuery(TRACKS);

  return <Layout grid>{JSON.stringify(data)} </Layout>;
};

export default Tracks;
