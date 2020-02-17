<template>
  <div class="home">
    <GameOptions />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GameOptions from "@/components/GameOptions.vue";

@Component({
  components: { GameOptions }
})
export default class Home extends Vue {}
</script>
