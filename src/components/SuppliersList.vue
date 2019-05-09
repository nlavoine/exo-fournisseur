<template>
    <div class="container"><h1>Liste des fournisseurs</h1>
        <div class="input-group mb-3 m-auto" style="width: 15rem;">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Filtrer...</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="selectedFilter" >
                <option value="all" selected>All</option>
                <option v-bind:value="true">Ok</option>
                <option v-bind:value="false">Ko</option>
            </select>
        </div>
        <ul class="list-unstyled mt-3">
            <li v-for="item in filteredList" v-bind:key="item.id" class="mb-2">
                <div class="card" style="width: 20rem; margin: 0 auto">
                    <div class="card-body">
                        <h5 class="card-text">{{ item.name }}</h5>
                        <!--<router-link :to="{name:'supplier', params: {id:item.id, name:item.name, status:item.status, checkedAt:item.checkedAt} }" class="btn btn-sm btn-primary">En savoir plus</router-link>-->

                        <supplier :id="item.id" :name="item.name" :status="item.status" :checkedAt="item.checkedAt"></supplier>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import Supplier from "./Supplier";


    export default {
        name: "SuppliersList.vue",
        components: {Supplier},
        data:function(){
            return {
                selectedFilter:"all"
            }
        },
        props: {
            DataSuppliersList: Array
        },
        computed: {
            filteredList: function () {
                let vm = this
                let status = vm.selectedFilter
                if(status === "all") {
                    return vm.DataSuppliersList
                }else {
                    return vm.DataSuppliersList.filter(function(supplier){
                        console.log(supplier.status === status);
                        return supplier.status === status
                    })
                }
            }
        }
    }

</script>

<style scoped>

</style>