import { Getter, GetterTree } from "vuex";
import { AppState } from "./index";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import { GameEstimate } from "@/models/GameEstimate";

export const AppGetters: GetterTree<AppState, AppState> = {
  currentGame(state: AppState): Game | null {
    return state.currentGame || null;
  },
  me(state: AppState): Player | null {
    const currentPlayers = state.currentGame?.players || [];

    if (currentPlayers.length === 0) {
      return null;
    }

    return (
      currentPlayers.find((player: Player) => {
        return player.id === state.currentPlayer;
      }) || null
    );
  },
  gameProgress(state: AppState): number {
    if (!state.currentGame) {
      return 0;
    }

    const totalPlayers = state.currentGame.players.length;

    if (totalPlayers === 0) {
      return 0;
    }

    return (state.currentGame.estimates.length / totalPlayers) * 100;
  },
  playerName: state => (playerId: string): string => {
    if (!state.currentGame) {
      return "";
    }

    const player = state.currentGame.players.find(
      player => player.id === playerId
    );

    return player?.name || "";
  },
  gameEstimates(state: AppState, getters): Array<GameEstimate> {
    if (!state.currentGame) {
      return [];
    }

    return state.currentGame.players.map(player => {
      const existingEstimate = state.currentGame?.estimates.find(
        estimate => estimate.playerId === player.id
      );

      return new GameEstimate(
        getters.playerName(player.id),
        existingEstimate?.storyPoints || 0
      );
    });
  }
};
