<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <p>Sélectionner une rubrique</p>
        <router-link to="suppliersList" class="btn btn-primary m-1">Suppliers List</router-link>
        <router-link to="suppliersMap" class="btn btn-primary m-1">Suppliers Map</router-link>
        <router-link to="AddSupplier" class="btn btn-primary m-1">Add a Supplier</router-link>
        <!--<div class="alert alert-success" role="alert" v-if="success">Liste Chargée</div>
        <div class="alert alert-warning" role="alert" v-if="loading">Chargement de la liste des fournisseurs</div>
        <div class="alert alert-danger" role="alert" v-if="error">{{errorMsg}}</div>-->
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
                //Suppliers: [],
                loading: false,
                /*error: null,
                success: null,*/
                errorMsg: ""
            }
        },
        beforeCreate: function () {
            /*console.log("Axios call !");
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => {
                    // handle success
                    this.$root.$Suppliers = response.data;
                })
                .catch(error => {
                    // handle error
                    console.log(error)
                });*/
            //this.$root.axiosCall()

        },

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


