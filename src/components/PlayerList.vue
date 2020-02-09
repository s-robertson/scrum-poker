<template>
  <MdList>
    <MdListItem :key="index" v-for="(player, index) in game.players">
      {{ player.name }}
    </MdListItem>
  </MdList>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Game } from "@/models/Game";

@Component
export default class PlayerList extends Vue {
  @Prop(Game) readonly game!: Game;
}
</script>
