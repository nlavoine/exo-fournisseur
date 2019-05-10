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
        <b-alert
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>Supplier created successfully </p>
            <b-progress
                    variant="success"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
            ></b-progress>
        </b-alert>
        <!--<div class="alert alert-success mt-5" role="alert" v-if="axiosSuccess">Supplier created successfully</div>-->
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
                suppliersList: {
                    myDatas: []
                },
                dismissSecs: 10,
                dismissCountDown: 0,
            }
        },
        props: {
            axiosSuccess: Boolean,
        },
        methods:{
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },

        },
        computed: {
            filteredList: function () {
                let vm = this;
                let status = vm.selectedFilter
                //console.log(vm.suppliersList);
                if (status === "all") {
                    return vm.suppliersList.myDatas
                } else {
                    return vm.suppliersList.myDatas.filter(function (supplier) {
                        return supplier.status === status
                    })
                }
            }
        },
        mounted: async function () {
            this.$root.axiosCall(true, this.suppliersList)

        },
    }

</script>

<style scoped>

</style>