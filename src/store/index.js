import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import {
    getters
} from './getters';
import {
    state,
    mutations
} from './mutations';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    // plugins: [createPersistedState()] // この行でvuexに「vuex-persistedstate」を追加
});