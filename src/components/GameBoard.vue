<template>
  <div>
    Hi, {{ this.playerName }}
    <MdProgressBar md-mode="determinate" :md-value="roundProgress" />
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-size-100 md-gutter">
        <div class="md-layout-item md-size-50">
          <EstimateForm v-if="!roundFinished" :game="game" :player="player" />
        </div>
        <div class="md-layout-item md-size-50">
          <EstimateList :game="game" />
          <MdButton @click="handleReset">Reset</MdButton>
          <MdButton @click="handleExit">Exit</MdButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Game } from "@/models/Game";
import { Player } from "@/models/Player";
import EstimateForm from "@/components/EstimateForm.vue";
import EstimateList from "@/components/EstimateList.vue";
import { Action } from "vuex-class";
import { ActionMethod } from "vuex";

@Component({
  components: { EstimateList, EstimateForm }
})
export default class GameBoard extends Vue {
  @Prop(Game) game!: Game;
  @Prop(Player) player!: Player;
  @Action("resetCurrentGame") resetCurrentGame!: ActionMethod;
  @Action("deletePlayer") deletePlayer!: ActionMethod;

  get playerName() {
    return this.player.name;
  }

  get roundFinished(): boolean {
    return this.roundProgress === 100;
  }

  get roundProgress() {
    const totalPlayers = this.game.players.length;
    const totalEstimates = this.game.estimates.length;
    return (totalEstimates / totalPlayers) * 100;
  }

  handleReset() {
    this.resetCurrentGame();
  }

  handleExit() {
    this.deletePlayer(this.player.id);
  }
}
</script>
