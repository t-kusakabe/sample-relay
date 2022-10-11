import { useState, useEffect } from 'react';
import fetchGraphQL from '../lib/fetchGraphQL';

const Home = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchGraphQL(`
      query RepositoryNameQuery {
        repository(owner: "owner", name: "repository_name") {
          name
        }
      }
    `).then((response) => {
      if (!isMounted) {
        return;
      }

      const data = response.data;
      setName(data.repository.name);
    }).catch((error) => {
      console.log(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <p>{name != null ? `Repository: ${name}` : "Loading"}</p>
  );
};

export default Home;
