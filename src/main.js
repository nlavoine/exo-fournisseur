import Vue from 'vue'
import App from './App.vue'
import router from './router'

const axios = require('axios');


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDgQRHUsMFvtkiM91rlD3TJKNyumP0tSn8',
    }
})

//import './registerServiceWorker'
import './myRegisterSW'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),

    methods: {
        axiosCall: function(isComponent, target) {
            console.log("Axios call !");
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    // handle success
                    if(isComponent){
                        target.myDatas = response.data;
                    }else {
                        this.$root.$Suppliers = response.data;
                    }
                })
                .catch(error => {
                    // handle error
                    this.$root.$Suppliers = localStorage.getItem('API-cache')
                    console.log(error)
                });
        }
    }

}).$mount('#app')




