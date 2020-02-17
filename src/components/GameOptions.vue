<template>
  <div class="c-game-options">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <MdCard>
          <MdCardHeader>
            <div class="md-title">Join a Game</div>
          </MdCardHeader>
          <MdCardContent>
            <MdField>
              <label>
                Game ID
              </label>
              <MdInput />
            </MdField>
            <MdButton class="md-raised">Join</MdButton>
          </MdCardContent>
        </MdCard>
      </div>
      <div class="md-layout-item">
        <MdCard>
          <MdCardContent>
            <MdButton @click="handleNewGameClick" class="md-raised md-primary"
              >New Game</MdButton
            >
          </MdCardContent>
        </MdCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Action } from "vuex-class";
import { ActionMethod } from "vuex";

@Component
export default class GameOptions extends Vue {
  @Action("newGame") newGame!: ActionMethod;
  async handleNewGameClick() {
    const gameId: string = await this.newGame();
    this.$router.push({ name: "Game", params: { id: gameId } });
  }
}
</script>

<style lang="scss">
.c-game-options {
  width: 50%;
  margin: 0 auto;
}
</style>
