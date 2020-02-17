// tslint:disable
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      game {
        id
        players {
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
        estimates {
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
      estimate {
        game {
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
        player {
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
        storyPoints
      }
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      game {
        id
        players {
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
        estimates {
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
      estimate {
        game {
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
        player {
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
        storyPoints
      }
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      game {
        id
        players {
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
        estimates {
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
      estimate {
        game {
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
        player {
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
        storyPoints
      }
    }
  }
`;
export const createEstimate = /* GraphQL */ `
  mutation CreateEstimate(
    $input: CreateEstimateInput!
    $condition: ModelEstimateConditionInput
  ) {
    createEstimate(input: $input, condition: $condition) {
      game {
        id
        players {
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
        estimates {
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
      player {
        id
        name
        game {
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
        estimate {
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
      storyPoints
    }
  }
`;
export const updateEstimate = /* GraphQL */ `
  mutation UpdateEstimate(
    $input: UpdateEstimateInput!
    $condition: ModelEstimateConditionInput
  ) {
    updateEstimate(input: $input, condition: $condition) {
      game {
        id
        players {
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
        estimates {
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
      player {
        id
        name
        game {
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
        estimate {
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
      storyPoints
    }
  }
`;
export const deleteEstimate = /* GraphQL */ `
  mutation DeleteEstimate(
    $input: DeleteEstimateInput!
    $condition: ModelEstimateConditionInput
  ) {
    deleteEstimate(input: $input, condition: $condition) {
      game {
        id
        players {
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
        estimates {
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
      player {
        id
        name
        game {
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
        estimate {
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
      storyPoints
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      players {
        items {
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
        nextToken
      }
      estimates {
        items {
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
        nextToken
      }
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      players {
        items {
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
        nextToken
      }
      estimates {
        items {
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
        nextToken
      }
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      players {
        items {
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
        nextToken
      }
      estimates {
        items {
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
        nextToken
      }
    }
  }
`;
