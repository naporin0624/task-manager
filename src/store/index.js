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
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
});