import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// modules
import common from "./modules/common";

export default new Vuex.Store({
  modules: {
    common
  },
  plugins: [createLogger()],
  strict: true
});
