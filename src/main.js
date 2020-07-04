import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import http from '@/api/api.js'
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
