import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Amplify from "aws-amplify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
