import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import AuthorsList from '@/components/Authors/List'
import SingleAuthor from '@/components/Authors/Single'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: AuthorsList
    },
    {
      path: '/users/:id',
      name: 'Author',
      component: SingleAuthor
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
