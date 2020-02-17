import { MutationTree } from "vuex";
import { AppState } from "@/store/index";
import { Estimate } from "@/models/Estimate";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import { AppStatus } from "@/types";

export const AppMutations: MutationTree<AppState> = {
  addEstimate(state: AppState, newEstimate: Estimate) {
    const currentGame = state.currentGame;

    if (!currentGame) {
      throw new Error("No current game!");
    }

    const updatedEstimates = currentGame.estimates.filter(estimate => {
      return estimate.playerId !== newEstimate.playerId;
    });

    updatedEstimates.push(newEstimate);

    currentGame.estimates = updatedEstimates;
  },
  joinGame(state: AppState, player: Player) {
    state.currentGame?.players?.push(player);
  },
  playerJoined(state: AppState, player: Player) {
    if (state.currentPlayer === player.id) {
      return;
    }
    state.currentGame?.players?.push(player);
  },
  playerLeft(state: AppState, playerId: string) {
    if (state.currentGame) {
      state.currentGame.players = state.currentGame?.players?.filter(player => {
        return player.id !== playerId;
      });
    }
  },
  setCurrentGame(state: AppState, game: Game) {
    state.currentGame = game;
  },
  setCurrentPlayer(state: AppState, playerId: string) {
    state.currentPlayer = playerId;
  },
  setEstimates(state: AppState, estimates: Array<Estimate>) {
    if (!state.currentGame) {
      return;
    }
    state.currentGame.estimates = estimates;
  },
  setStatus(state: AppState, status: AppStatus) {
    state.status = status;
  }
};
