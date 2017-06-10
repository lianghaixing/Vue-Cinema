import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/List'
import Detail from 'components/Detail'
import Signin from 'components/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Signin
    },{
      path : '/List',
      name : 'List',
      component : List
    },
    {
      path : '/movie/:title',
      name : 'detail',
      component : Detail
    },
    {
      path: '*',
      redirect : '/'
    }
  ]
})
