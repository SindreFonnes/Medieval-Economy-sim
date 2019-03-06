import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TMPSolution from './components/TMPSolution.vue'
import Tasks from './components/Tasks.vue'
import GeneralOverview from './components/GeneralOverview.vue'
import Professions from './components/Professions.vue'
import Citizens from './components/Citizens.vue'
import CitiesAndDivisions from './components/CitiesAndDivisions.vue'

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
      component: TMPSolution
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/generaloverview',
      name: 'generaloverview',
      component: GeneralOverview
    },
    {
      path: '/professions',
      name: 'professions',
      component: Professions
    },
    {
      path: '/citizens',
      name: 'citizens',
      component: Citizens
    },
    {
      path: '/citiesanddivisions',
      name: 'citiesanddivisions',
      component: CitiesAndDivisions
    }
  ]
})
