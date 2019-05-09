import Vue from 'vue'
import App from './App.vue'
import router from './router'




import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDgQRHUsMFvtkiM91rlD3TJKNyumP0tSn8',
  }
})


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
