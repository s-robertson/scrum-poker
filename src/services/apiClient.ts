import API, { APIClass, graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api";
import {
  CreateGameInput,
  CreatePlayerInput,
  DeletePlayerInput,
  GetGameQuery
} from "@/API";
import { getGame } from "@/graphql/queries";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import { Estimate } from "@/models/Estimate";
import * as mutations from "@/graphql/mutations";
import * as subscriptions from "@/graphql/subscriptions";
import { v4 as uuid } from "uuid";

export class ApiClient {
  client: APIClass;

  constructor() {
    this.client = API;
  }

  async loadGame(id: string): Promise<Game | null> {
    const result = await this.client.graphql({
      query: getGame,
      variables: { id }
    });

    const queryResult: GetGameQuery = result.data;

    if (!queryResult.getGame) {
      return null;
    }

    const game = new Game(id);

    queryResult.getGame.players?.items?.forEach(playerItem => {
      if (playerItem) {
        game.players.push(new Player(playerItem.id, playerItem.name));
      }
    });

    queryResult.getGame.estimates?.items?.forEach(estimateItem => {
      if (estimateItem) {
        game.estimates.push(
          new Estimate(id, estimateItem.player.id, estimateItem.storyPoints)
        );
      }
    });

    return game;
  }

  async createGame(): Promise<Game> {
    const id: string = uuid();

    const createOptions: CreateGameInput = {
      id
    };

    const operation = graphqlOperation(mutations.createGame, {
      input: createOptions
    });
    await API.graphql(operation);
    return new Game(id);
  }

  async createPlayer(name: string, gameId: string): Promise<Player> {
    const id: string = uuid();

    const playerDetails: CreatePlayerInput = {
      id: id,
      name: name,
      playerGameId: gameId
    };

    await this.performMutation(mutations.createPlayer, playerDetails);

    return new Player(id, name);
  }

  async deletePlayer(id: string): Promise<any> {
    const playerDetails: DeletePlayerInput = {
      id
    };
    return this.performMutation(mutations.deletePlayer, playerDetails);
  }

  async subscribeToPlayerUpdates(callback: {
    (data: Record<string, any>): void;
  }): Promise<Array<any>> {
    const subscriptionPromises = [
      subscriptions.onDeletePlayer,
      subscriptions.onCreatePlayer
    ].map(sub => {
      const operation = graphqlOperation(sub);
      return API.graphql(operation).subscribe({
        next: (playerData: Record<string, any>) => {
          callback(playerData);
        }
      });
    });

    return Promise.all(subscriptionPromises);
  }

  async performQuery(
    query: string,
    variables?: object
  ): Promise<GraphQLResult> {
    const operation = graphqlOperation(query, { variables });
    return API.graphql(operation);
  }

  async performMutation(query: string, input?: object): Promise<GraphQLResult> {
    const operation = graphqlOperation(query, { input });
    return API.graphql(operation);
  }
}
