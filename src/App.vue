<template>
  <div id="app">
    <MdApp>
      <MdAppToolbar class="md-primary">
        <span class="md-title">Scrum Poker</span>
      </MdAppToolbar>
      <MdAppContent>
        <RouterView />
      </MdAppContent>
    </MdApp>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppStatus } from "@/types";
import { State } from "vuex-class";

@Component
export default class App extends Vue {
  @State("status") status!: AppStatus;
}
</script>
