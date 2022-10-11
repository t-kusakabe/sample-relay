import { useState, useEffect } from 'react';
import { fetchQuery } from 'react-relay';
import { initEnvironment } from '../lib/relay';
import repositoryQuery from '../queries/repository';

export const getServerSideProps = async () => {
  const environment = initEnvironment();
  const queryProps = await fetchQuery(environment, repositoryQuery, {}).toPromise();

  return {
    props: {
      ...queryProps
    }
  };
};

const Home = (props) => {
  return (
    <p>{props != null ? `Repository: ${props.repository.name}` : "Loading"}</p>
  );
};

export default Home;
