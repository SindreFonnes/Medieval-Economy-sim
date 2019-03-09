import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tmp',
      name: 'tmp',
      component: () => import('./components/TMPSolution.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./components/Tasks.vue')
    },
    {
      path: '/generaloverview',
      name: 'generaloverview',
      component: () => import('./components/GeneralOverview.vue')
    },
    {
      path: '/professions',
      name: 'professions',
      component: () => import('./components/Professions.vue')
    },
    {
      path: '/citizens',
      name: 'citizens',
      component: () => import('./components/Citizens.vue')
    },
    {
      path: '/citiesanddivisions',
      name: 'citiesanddivisions',
      component: () => import('./components/CitiesAndDivisions.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./components/Resources.vue')
    },
    {
      path: '/wares',
      name: 'wares',
      component: () => import('./components/Wares.vue')
    },
    {
      path: '/structuredesigns',
      name: 'structuredesigns',
      component: () => import('./components/StructureDesigns')
    }
  ]
})
