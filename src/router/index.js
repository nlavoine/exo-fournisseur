import Vue from 'vue'
import Router from 'vue-router'

import SuppliersList from '@/components/SuppliersList'
import SuppliersMap from '@/components/SuppliersMap'
import Supplier from '@/components/Supplier'
import AddSupplier from '@/components/AddSupplier'
import EditSupplier from '@/components/EditSupplier'

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
      component: SuppliersList,
      props: true,
    },
    {
      path: '/suppliersMap',
      name: 'suppliersMap',
      component: SuppliersMap,
      props: true,
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
      props: true,
    },
    {
      path: '/EditSupplier/:supplierId',
      name: 'editSupplier',
      component: EditSupplier,
      props: true,
    }
  ]
})
