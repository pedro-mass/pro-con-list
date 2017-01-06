import App from '../components/App.vue'
import Pedro from '../components/Pedro.vue'
import Auth from '../components/Auth.vue'
import TOS from '../components/TOS.vue'
import Profile from '../components/Profile.vue'

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
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/tos',
    name: 'tos',
    component: TOS
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

export default {
  routes
}
