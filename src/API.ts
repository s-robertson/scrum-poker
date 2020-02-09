/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  playerGameId: string,
  playerEstimateId?: string | null,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  playerGameId?: string | null,
  playerEstimateId?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateEstimateInput = {
  storyPoints: number,
  estimateGameId: string,
  estimatePlayerId: string,
};

export type ModelEstimateConditionInput = {
  storyPoints?: ModelIntInput | null,
  and?: Array< ModelEstimateConditionInput | null > | null,
  or?: Array< ModelEstimateConditionInput | null > | null,
  not?: ModelEstimateConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEstimateInput = {
  storyPoints?: number | null,
  estimateGameId?: string | null,
  estimatePlayerId?: string | null,
};

export type DeleteEstimateInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
};

export type ModelGameConditionInput = {
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEstimateFilterInput = {
  storyPoints?: ModelIntInput | null,
  and?: Array< ModelEstimateFilterInput | null > | null,
  or?: Array< ModelEstimateFilterInput | null > | null,
  not?: ModelEstimateFilterInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type CreateEstimateMutationVariables = {
  input: CreateEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type CreateEstimateMutation = {
  createEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type UpdateEstimateMutationVariables = {
  input: UpdateEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type UpdateEstimateMutation = {
  updateEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type DeleteEstimateMutationVariables = {
  input: DeleteEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type DeleteEstimateMutation = {
  deleteEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEstimateQueryVariables = {
  id: string,
};

export type GetEstimateQuery = {
  getEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type ListEstimatesQueryVariables = {
  filter?: ModelEstimateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstimatesQuery = {
  listEstimates:  {
    __typename: "ModelEstimateConnection",
    items:  Array< {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    estimate:  {
      __typename: "Estimate",
      game:  {
        __typename: "Game",
        id: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
      },
      storyPoints: number,
    } | null,
  } | null,
};

export type OnCreateEstimateSubscription = {
  onCreateEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type OnUpdateEstimateSubscription = {
  onUpdateEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type OnDeleteEstimateSubscription = {
  onDeleteEstimate:  {
    __typename: "Estimate",
    game:  {
      __typename: "Game",
      id: string,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      game:  {
        __typename: "Game",
        id: string,
      },
      estimate:  {
        __typename: "Estimate",
        storyPoints: number,
      } | null,
    },
    storyPoints: number,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        storyPoints: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
