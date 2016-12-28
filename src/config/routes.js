import App from '../components/App.vue'
import Pedro from '../components/Pedro.vue'

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
