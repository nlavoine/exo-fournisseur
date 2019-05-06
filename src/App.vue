<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>Sélectionner une rubrique</p>
    <router-link to="suppliersList" class="btn btn-primary m-1">Suppliers List</router-link>
    <router-link to="suppliersMap" class="btn btn-primary m-1">Suppliers Map</router-link>
    <router-link to="supplier" class="btn btn-primary m-1">Supplier</router-link>
    <router-view class="mt-5"></router-view>
  </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  /*components: {
    HelloWorld
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


