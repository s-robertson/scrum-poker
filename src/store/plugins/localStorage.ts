import { ActionPayload, MutationPayload, Plugin, Store } from "vuex";
import { AppState } from "@/store";
import { Player } from "@/models/Player";

type GameInfo = {
  playerId: string;
};

class GameInfoStorage {
  private storageKey = "gameInfo";

  storeData(data: GameInfo) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  retrieveData(): GameInfo | null {
    const dataString = window.localStorage.getItem(this.storageKey);

    if (!dataString) {
      return null;
    }

    const parsedData = JSON.parse(dataString);

    if (!parsedData?.playerId) {
      this.clearData();
      return null;
    }

    return parsedData;
  }

  clearData() {
    window.localStorage.removeItem(this.storageKey);
  }
}

export const gameInfoStoragePlugin: Plugin<AppState> = (
  store: Store<AppState>
) => {
  const storage = new GameInfoStorage();

  store.subscribe((mutation: MutationPayload, state: AppState) => {
    if (mutation.type === "joinGame") {
      const playerId = (mutation.payload as Player).id;
      storage.storeData({ playerId });
      store.commit("setCurrentPlayer", playerId);
    }
  });

  store.subscribeAction({
    before: (action: ActionPayload) => {
      if (action.type === "deletePlayer") {
        store.commit("setCurrentPlayer", "");
        storage.clearData();
      }
    },
    after: (action: ActionPayload, state: AppState) => {
      if (action.type === "loadGame") {
        const data = storage.retrieveData();

        if (data?.playerId && state.currentGame) {
          const playerId = data.playerId;
          const playerIndex: number = state.currentGame.players.findIndex(
            player => {
              return player.id === playerId;
            }
          );

          if (playerIndex !== -1) {
            store.commit("setCurrentPlayer", playerId);
          }
        }

        storage.clearData();
      }
    }
  });
};
