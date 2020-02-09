import { ActionTree } from "vuex";
import { Game } from "@/models/Game";
import { AppState } from "@/store/index";
import { Player } from "@/models/Player";
import uuid from "uuid";

export const AppActions: ActionTree<AppState, AppState> = {
  async loadGame({ commit }, id: string): Promise<Game> {
    const fakeTimer = new Promise(resolve => {
      setTimeout(() => resolve(), 3000);
    });

    await fakeTimer;
    const loadedGame = new Game(id);
    commit("setCurrentGame", loadedGame);
    return loadedGame;
  },
  joinGame({ commit }, playerName: string) {
    const playerId = uuid.v4();
    const newPlayer = new Player(playerId, playerName);
    commit("setCurrentPlayer", newPlayer.id);
    commit("addPlayerToGame", newPlayer);
  },
  resetCurrentGame({ commit, state }) {
    commit("setEstimates", []);
  }
};
