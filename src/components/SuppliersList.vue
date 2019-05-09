<template>
    <div class="container"><h1>Liste des fournisseurs</h1>
        <div class="input-group mb-3 m-auto" style="width: 15rem;">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Filtrer...</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="selectedFilter">
                <option value="all" selected>All</option>
                <option v-bind:value="true">Ok</option>
                <option v-bind:value="false">Ko</option>
            </select>
        </div>
        <div class="alert alert-success mt-5" role="alert" v-if="axiosSuccess">Supplier created successfully</div>
        <ul class="list-unstyled mt-3">
            <li v-for="item in filteredList" v-bind:key="item.id" class="mb-2">

                <!--<router-link :to="{name:'supplier', params: {id:item.id, name:item.name, status:item.status, checkedAt:item.checkedAt} }" class="btn btn-sm btn-primary">En savoir plus</router-link>-->

                <supplier :id="item.id" :name="item.name" :status="item.status" :checkedAt="item.checkedAt"></supplier>
            </li>
        </ul>
    </div>
</template>

<script>

    import Supplier from "./Supplier";

    export default {
        name: "SuppliersList.vue",
        components: {Supplier},
        data: function () {
            return {
                selectedFilter: "all",
                suppliersList: this.$root.$Suppliers
            }
        },
        props: {
            axiosSuccess: Boolean,
        },
        computed: {
            filteredList: function () {
                let vm = this;
                let status = vm.selectedFilter
                if (status === "all") {
                    console.log(vm.suppliersList);
                    return vm.suppliersList
                } else {
                    return vm.suppliersList.filter(function (supplier) {
                        return supplier.status === status
                    })
                }
            }
        },
        beforeCreate: async function () {

            this.$root.axiosCall(true, this)

        },
    }

</script>

<style scoped>

</style>