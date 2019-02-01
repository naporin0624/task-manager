// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {
    name: 'v-touch'
})

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})