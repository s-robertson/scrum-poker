import { MutationTree } from "vuex";
import { AppState } from "@/store/index";
import { Estimate } from "@/models/Estimate";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";

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
  setCurrentGame(state: AppState, game: Game) {
    state.currentGame = game;
  },
  setCurrentPlayer(state: AppState, playerId: string) {
    state.currentPlayer = playerId;
  },
  addPlayerToGame(state: AppState, player: Player) {
    state.currentGame?.players?.push(player);
  },
  setEstimates(state: AppState, estimates: Array<Estimate>) {
    if (!state.currentGame) {
      return;
    }
    state.currentGame.estimates = estimates;
  }
};
