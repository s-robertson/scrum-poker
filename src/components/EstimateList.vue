<template>
  <MdCard>
    <MdCardHeader>
      <div class="md-title">
        Estimates
      </div>
    </MdCardHeader>
    <MdCardContent>
      <MdTable>
        <MdTableRow>
          <MdTableHead>Player</MdTableHead>
          <MdTableHead>Story Points</MdTableHead>
        </MdTableRow>
        <MdTableRow :key="index" v-for="(estimate, index) in estimates">
          <MdTableCell>{{ estimate.playerName }}</MdTableCell>
          <MdTableCell>{{ estimate.storyPoints }}</MdTableCell>
        </MdTableRow>
      </MdTable>
    </MdCardContent>
  </MdCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Game } from "@/models/Game";
import { Getter } from "vuex-class";
import { GameEstimate } from "@/models/GameEstimate";

@Component
export default class EstimateList extends Vue {
  @Prop(Game) readonly game!: Game;
  @Getter("gameEstimates") estimates!: Array<GameEstimate>;
}
</script>
