<template>
  <div class="home">
    <GameBoard
      v-if="gameInProgress"
      :current-game="currentGame"
      :current-player="currentPlayer"
    />
  </div>
</template>

<script lang="ts">
import GameBoard from "@/components/GameBoard.vue";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";

@Component({
  components: { GameBoard }
})
export default class Home extends Vue {
  @Getter("currentGame") currentGame?: Game;
  @Getter("me") currentPlayer?: Player;

  get gameInProgress(): boolean {
    return !!(this.currentGame && this.currentPlayer);
  }
}
</script>
