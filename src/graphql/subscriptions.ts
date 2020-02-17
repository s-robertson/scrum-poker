// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateEstimate = /* GraphQL */ `
  subscription OnCreateEstimate {
    onCreateEstimate {
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
export const onUpdateEstimate = /* GraphQL */ `
  subscription OnUpdateEstimate {
    onUpdateEstimate {
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
export const onDeleteEstimate = /* GraphQL */ `
  subscription OnDeleteEstimate {
    onDeleteEstimate {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
