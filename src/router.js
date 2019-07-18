import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: () => import('./components/Frontpage')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('./components/Tasks')
    },
    {
      path: '/generaloverview',
      name: 'generaloverview',
      component: () => import('./components/GeneralOverview')
    },
    {
      path: '/professions',
      name: 'professions',
      component: () => import('./components/Professions')
    },
    {
      path: '/citizens',
      name: 'citizens',
      component: () => import('./components/Citizens')
    },
    {
      path: '/citiesanddivisions',
      name: 'citiesanddivisions',
      component: () => import('./components/CitiesAndDivisions')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('./components/Resources')
    },
    {
      path: '/wares',
      name: 'wares',
      component: () => import('./components/Wares')
    },
    {
      path: '/structuredesigns',
      name: 'structuredesigns',
      component: () => import('./components/StructureDesigns')
    },
    {
      path: '/complexes',
      name: 'complexes',
      component: () => import('./components/Complexes')
    },
    {
      path: '/structures',
      name: 'structures',
      component: () => import('./components/Structures')
    }
  ]
})