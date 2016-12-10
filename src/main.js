import Vue from 'vue'
import App from './App.vue'

// explicit installation required in module environments
import VueFire from 'vuefire'
Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
