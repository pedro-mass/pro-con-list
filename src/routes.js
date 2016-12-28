import App from './App.vue'
import Pedro from './Pedro.vue'

const routes = [
  {
      path: '/',
      name: 'home',
      component: App
  },
  {
      path: '/pedro',
      component: Pedro
  },

  {
    path: '*',
    redirect: { name: 'home' }
  }
]

export default {
  routes
}
