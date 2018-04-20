import Vue from "vue";
import store from "./store";

// pages
import Index from "./pages/index.vue";

Vue.component("index", Index);

new Vue({
  el: "#app"
});
