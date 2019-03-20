/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import backMain from './backend/BackMain'
import 'semantic-ui-css/semantic.min.css'
import client from './backend/client'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

