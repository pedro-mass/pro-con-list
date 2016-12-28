import Vue from 'vue'

// explicit installation required in module environments
import VueFire from 'vuefire'
Vue.use(VueFire)

import VueRouter from 'vue-router'
import routes from './config/routes.js'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes.routes
})

new Vue({
  router
}).$mount('#app')
