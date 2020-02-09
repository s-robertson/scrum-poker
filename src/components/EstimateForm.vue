<template>
  <MdCard class="md-small-size-100">
    <form @submit.prevent="handleSubmit">
      <MdCardHeader>
        Enter your estimate
      </MdCardHeader>
      <MdCardContent>
        <MdField>
          <label for="story-points">Story Points:</label>
          <MdInput v-model="storyPoints" type="number" id="story-points" />
        </MdField>
      </MdCardContent>

      <MdCardActions>
        <MdButton type="submit" class="md-primary">Submit Estimate</MdButton>
      </MdCardActions>
    </form>
  </MdCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Estimate } from "@/models/Estimate";
import { Player } from "@/models/Player";
import { Game } from "@/models/Game";
import { MutationMethod } from "vuex";
import { Mutation } from "vuex-class";

@Component
export default class EstimateForm extends Vue {
  @Prop(Player) player!: Player;
  @Prop(Game) game!: Game;
  @Mutation("addEstimate") addEstimate!: MutationMethod;

  storyPoints = "";

  handleSubmit(): void {
    const storyPoints = parseInt(this.storyPoints);
    this.addEstimate(new Estimate(this.game.id, this.player.id, storyPoints));
  }
}
</script>
