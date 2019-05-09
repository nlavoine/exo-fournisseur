import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import SuppliersList from '@/components/SuppliersList'
import SuppliersMap from '@/components/SuppliersMap'
import Supplier from '@/components/Supplier'
import AddSupplier from '@/components/AddSupplier'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/suppliersList',
      name: 'suppliersList',
      component: SuppliersList
    },
    {
      path: '/suppliersMap',
      name: 'suppliersMap',
      component: SuppliersMap
    }
    ,
    {
      path: '/supplier',
      name: 'supplier',
      component: Supplier,
      props: true,
    },
    {
      path: '/AddSupplier',
      name: 'addSupplier',
      component: AddSupplier,
    }
  ]
})
