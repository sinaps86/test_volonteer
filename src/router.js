import Vue from 'vue'
import Router from 'vue-router'

import welcome_page from './pages/welcom-page/welcome-page.vue'
import v_sign_page from './pages/volonteer/sign-in-page/sign-in-page.vue'
import v_login_form from './components/forms/volonteer-login/volonteer-login'
import v_registration_form from './components/forms/volonteer-registration/volonteer-registration'

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
      redirect: '/volonteer/login',
      component: v_sign_page,
      children: [
        {
          path: 'login',
          name: 'v_login',
          component: v_login_form,
        },
        {
          path: 'registration',
          name: 'v_registration',
          component: v_registration_form,
        }
      ]
    }
  ],
  mode: 'history'
})
