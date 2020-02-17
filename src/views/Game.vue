<template>
  <div>
    <GameBoard
      v-if="currentGame && player"
      :game="currentGame"
      :player="player"
    />
    <div v-if="!player">
      <form @submit.prevent="handleSubmit">
        <MdField>
          <label for="name">
            Enter your name:
          </label>
          <MdInput id="name" v-model="playerName"></MdInput>
        </MdField>
        <MdButton type="submit">Join Game</MdButton>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { ActionMethod } from "vuex";
import GameBoard from "@/components/GameBoard.vue";
import { Player } from "@/models/Player";

@Component({
  components: { GameBoard }
})
export default class Game extends Vue {
  @Prop(String) id!: string;
  @Action("loadGame") loadGame!: ActionMethod;
  @Action("deletePlayer") deletePlayer!: ActionMethod;
  @Action("joinGame") joinGame!: ActionMethod;
  @Getter("me") player?: Player;
  @Getter("currentGame") currentGame?: Game;

  game: Game | null = null;
  playerName = "";

  handleSubmit() {
    this.joinGame({
      playerName: this.playerName,
      gameId: this.id
    });
  }

  async mounted() {
    this.game = await this.loadGame(this.id);
  }
}
</script>
