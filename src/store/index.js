import Vue from "vue";
import Vuex from "vuex";
import UI from './modules/UI';
import miniscrolls from './modules/miniscrolls';
import localStorage from './modules/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UI,
    miniscrolls,
    localStorage
  }
});
