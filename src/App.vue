import {AppStatus} from "@/app";
<template>
  <div id="app">
    <MdApp>
      <MdAppToolbar class="md-primary">
        <span class="md-title">My Title</span>
      </MdAppToolbar>
    </MdApp>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { AppStatus } from "@/types";

@Component({
  computed: {
    ...mapState["status"]
  }
})
export default class App extends Vue {
  status: AppStatus = AppStatus.LOADING;

  get isLoading(): boolean {
    return this.status === AppStatus.LOADING;
  }
}
</script>
