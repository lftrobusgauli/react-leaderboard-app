import gql from 'graphql-tag';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      gameState {
        userId
        gamesPlayed
        score
        id
      }
    }
  }
`;

export default GET_USERS;
