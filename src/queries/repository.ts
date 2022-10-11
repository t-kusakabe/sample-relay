import { graphql } from 'react-relay';

export default graphql`
  query repositoryQuery {
    repository(owner: "" name: "repository_name") {
      name
    }
  }
`;
