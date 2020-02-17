import Vue from 'vue'

import moment from 'moment-timezone'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'
import VueRouter from 'vue-router'

import App from './App.vue'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import LastPosts from './components/LastPosts/LastPosts'
import NotFound from './components/NotFound/NotFound.vue'
import Post from './components/Post/Post'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueMoment, {
  moment
})

const routes = [
  {
    path: '/',
    component: LastPosts
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/home',
    component: LastPosts
  },
  {
    path: '/post/:id',
    component: Post,
    name: 'post'
  },
  // Not Found must be the last one!
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
