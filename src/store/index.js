import { createStore, createLogger } from "vuex";
import conterModule from "./modules/counter";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: conterModule,
  },
  state() {
    return {
      appTitle: "vuex working!",
    };
  },
  mutations,
  actions,
  getters: {
    uppercaseTitle(state) {
      return state.appTitle.toUpperCase();
    },
  },
});
