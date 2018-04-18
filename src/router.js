import Vue from 'vue'
import Router from 'vue-router'

import welcome_page from './pages/welcom-page/welcome-page.vue'
import volonteer_sign_page from './pages/volonteer/sign-in-page/sign-in-page.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: '',
      component: welcome_page,
    },
    {
      path: '/volonteer',
      name: 'volonteer_sign',
      component: volonteer_sign_page,
    }
  ],
  mode: 'history'
})
