// import { graphql } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

export default graphql`
  query repositoryQuery {
    repository(owner: "" name: "repository_name") {
      name
    }
  }
`;
