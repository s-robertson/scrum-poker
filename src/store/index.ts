import Vue from "vue";
import Vuex from "vuex";
import { Game } from "@/models/Game";
import { AppMutations } from "@/store/mutations";
import { AppStatus } from "@/types";
import { AppGetters } from "@/store/getters";
import { AppActions } from "@/store/actions";

Vue.use(Vuex);

export class AppState {
  status: AppStatus = AppStatus.LOADING;
  currentGame: Game | null = null;
  currentPlayer = "";
  subscriptions: Array<object> = [];
}

export default new Vuex.Store({
  state: new AppState(),
  mutations: AppMutations,
  getters: AppGetters,
  actions: AppActions
});
