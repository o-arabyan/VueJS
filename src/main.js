import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueApexCharts from 'vue-apexcharts'
import './assets/styles/main.scss'
import axios from 'axios'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.prototype.$http = axios
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// Api Links
// "https://api.myjson.com/bins/1917tv"
// "https://api.myjson.com/bins/13qgjn"