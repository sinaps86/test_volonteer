import Vue from 'vue'
import Router from 'vue-router'

import welcome_page from '../pages/welcom-page/welcome-page'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: '',
      component: welcome_page,
    }
  ],
   mode: 'history'
})
