import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import store from './vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
