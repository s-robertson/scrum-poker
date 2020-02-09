// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      game {
        id
        players {
          nextToken
        }
        estimates {
          nextToken
        }
      }
      estimate {
        game {
          id
        }
        player {
          id
          name
        }
        storyPoints
      }
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        game {
          id
        }
        estimate {
          storyPoints
        }
      }
      nextToken
    }
  }
`;
export const getEstimate = /* GraphQL */ `
  query GetEstimate($id: ID!) {
    getEstimate(id: $id) {
      game {
        id
        players {
          nextToken
        }
        estimates {
          nextToken
        }
      }
      player {
        id
        name
        game {
          id
        }
        estimate {
          storyPoints
        }
      }
      storyPoints
    }
  }
`;
export const listEstimates = /* GraphQL */ `
  query ListEstimates(
    $filter: ModelEstimateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstimates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        game {
          id
        }
        player {
          id
          name
        }
        storyPoints
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      players {
        items {
          id
          name
        }
        nextToken
      }
      estimates {
        items {
          storyPoints
        }
        nextToken
      }
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        players {
          nextToken
        }
        estimates {
          nextToken
        }
      }
      nextToken
    }
  }
`;
