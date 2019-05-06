import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
//import SuppliersList from './components/SuppliersList.vue'
//import SuppliersMap from './components/SuppliersMap.vue'


new Vue({
  router,
  render: h => h(App),
  methodes:{
    onSuppliersListClick:function(){

    },
    onMapClick:function(){

    }
  },
  /*components: {
    'SuppliersList': SuppliersList,
    'SuppliersMap': SuppliersMap
  }*/
}).$mount('#app')
