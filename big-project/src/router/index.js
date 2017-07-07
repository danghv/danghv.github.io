import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import registry from '@/components/registry'
import registrystep3 from '@/components/registrystep3'
import whathot from '@/components/whathot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registry',
      name: 'registry',
      component: registry
    },
    {
      path: '/registrystep3',
      name: 'registrystep3',
      component: registrystep3
    },
    {
      path: '/whathot',
      name: 'whathot',
      component: whathot
    }
  ]
})
