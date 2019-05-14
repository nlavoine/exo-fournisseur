<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h3>Sélectionner une rubrique</h3>
        <router-link to="suppliersList" class="btn btn-secondary m-1">Suppliers List</router-link>
        <router-link to="suppliersMap" class="btn btn-secondary m-1">Suppliers Map</router-link>
        <router-link to="AddSupplier" class="btn btn-secondary m-1">Add a Supplier</router-link>
        <!--<div class="alert alert-success" role="alert" v-if="success">Liste Chargée</div>
        <div class="alert alert-warning" role="alert" v-if="loading">Chargement de la liste des fournisseurs</div>
        <div class="alert alert-danger" role="alert" v-if="error">{{errorMsg}}</div>-->
        <hr />
        <router-view class="mt-5"  ></router-view>
    </div>
</template>


<script>
    //import HelloWorld from './components/HelloWorld.vue'

    //const axios = require('axios');

    export default {
        name: 'app',
        /*components: {
          HelloWorld
        }*/
        data() {
            return {
                //Suppliers: this.$root.$Suppliers,
                loading: false,
                /*error: null,
                success: null,*/
                errorMsg: ""
            }
        },


    }

    // Check that service workers are registered
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }else{
        console.log("no")
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


