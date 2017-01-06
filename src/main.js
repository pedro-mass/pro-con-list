import Vue from 'vue'

// VueX
import Vuex from 'vuex'
Vue.use(Vuex)
import VuexStore from './config/vuex-store.js'
const store = new Vuex.Store(VuexStore.store);

// VueFire
import VueFire from 'vuefire'
Vue.use(VueFire)

// VueRouter
import VueRouter from 'vue-router'
import routes from './config/routes.js'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes.routes
})

new Vue({
  store,
  router
}).$mount('#app')
