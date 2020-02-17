import { ActionContext, ActionTree, Commit } from "vuex";
import { Game } from "@/models/Game";
import { AppState } from "@/store/index";
import { Player } from "@/models/Player";
import { v4 as uuid } from "uuid";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createGame } from "@/graphql/mutations";
import { AppStatus } from "@/types";
import { ApiClient } from "@/services/apiClient";

const client: ApiClient = new ApiClient();

type LocalState = {
  playerId: string;
};

function subscribeToPlayerUpdates(
  gameId: string,
  commit: Commit
): Promise<Array<any>> {
  return client.subscribeToPlayerUpdates(playerData => {
    const data = playerData.value?.data;

    if (data.onCreatePlayer?.game.id === gameId) {
      commit(
        "addPlayerToGame",
        new Player(data.onCreatePlayer.id, data.onCreatePlayer.name)
      );
    }

    if (data.onDeletePlayer?.game.id === gameId) {
      commit("removePlayerFromGame", data.onDeletePlayer.id);
    }
  });
}

export const AppActions: ActionTree<AppState, AppState> = {
  async initApp({ commit }): Promise<void> {
    commit("setStatus", AppStatus.LOADING);

    commit("setStatus", AppStatus.READY);
  },
  async loadGame({ commit }, id: string): Promise<Game | null> {
    commit("setStatus", AppStatus.LOADING);
    const game: Game | null = await client.loadGame(id);
    if (!game) {
      commit("setCurrentGame", null);
      return null;
    }
    commit("setCurrentGame", game);

    const localGameInfo: string | null = window.localStorage.getItem(
      "gameInfo"
    );

    if (localGameInfo) {
      const gameInfo: LocalState = JSON.parse(localGameInfo);

      const playerIndex: number = game.players.findIndex(player => {
        return player.id === gameInfo.playerId;
      });

      if (playerIndex !== -1) {
        commit("setCurrentPlayer", game.players[playerIndex].id);
        subscribeToPlayerUpdates(game.id, commit);
      }
    }

    return game;
  },
  async joinGame(
    { commit, state }: ActionContext<AppState, AppState>,
    { playerName, gameId }: { playerName: string; gameId: string }
  ) {
    const newPlayer: Player = await client.createPlayer(playerName, gameId);
    const localState: LocalState = { playerId: newPlayer.id };
    window.localStorage.setItem("gameInfo", JSON.stringify(localState));
    commit("setCurrentPlayer", newPlayer.id);
    commit("addPlayerToGame", newPlayer);
    subscribeToPlayerUpdates(gameId, commit);
  },
  resetCurrentGame({ commit }) {
    commit("setEstimates", []);
  },
  async newGame({ commit }): Promise<string> {
    commit("setStatus", AppStatus.LOADING);
    const gameId: string = uuid();

    const operation = graphqlOperation(createGame, {
      input: { id: gameId }
    });
    const result = await API.graphql(operation);
    commit("setStatus", AppStatus.READY);
    return result.data.createGame.id;
  },
  async deletePlayer({ commit }, playerId: string): Promise<any> {
    await client.deletePlayer(playerId);
    window.localStorage.removeItem("gameInfo");
    commit("setCurrentPlayer", "");
  }
};
