import { MutationTree } from "vuex";
import { AppState } from "@/store/index";
import { Estimate } from "@/models/Estimate";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import { AppStatus } from "@/types";

export const AppMutations: MutationTree<AppState> = {
  addSubscription(state: AppState, subscription: object) {
    state.subscriptions.push(subscription);
  },
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
  setCurrentGame(state: AppState, game: Game) {
    state.currentGame = game;
  },
  setCurrentPlayer(state: AppState, playerId: string) {
    state.currentPlayer = playerId;
  },
  addPlayerToGame(state: AppState, player: Player) {
    state.currentGame?.players?.push(player);
  },
  setStatus(state: AppState, status: AppStatus) {
    state.status = status;
  },
  setEstimates(state: AppState, estimates: Array<Estimate>) {
    if (!state.currentGame) {
      return;
    }
    state.currentGame.estimates = estimates;
  },
  removePlayerFromGame(state: AppState, playerId: string) {
    if (state.currentGame) {
      state.currentGame.players = state.currentGame?.players?.filter(player => {
        return player.id !== playerId;
      });
    }
  }
};
