<template>
    <div>
        <!--<transition name="fade">
            <div class="alert alert-success" role="alert" v-show="isDeleted">Supplier deleted successfully</div>
        </transition>-->

        <transition name="slide-fade">
            <div v-show="!isDeleted">
                <div class="hello">
                    <!--<h5>Fournisseur : {{ name }}</h5>-->
                    <div class="card " style="width: 20rem; margin: 0 auto">
                        <div class="card-header "  style="background: #ccc;">
                            <h6 class="card-text">{{ name }}</h6>
                        </div>
                        <div class="card-body" style="background: #eaeaea;">


                            <transition name="fade">
                                <div v-show="!isHidden" class="mt-3 mb-3">
                                    <h6 :class="{ green: status, red:!status }">A du stock ? <b-badge v-if="status" variant="success">OK</b-badge><b-badge v-else variant="danger">KO</b-badge></h6>
                                    <p>Date de dernier relevé des stocks : {{ checkedAt }}</p>
                                    <!--<button class="btn btn-sm btn- mr-1">Edit supplier</button>-->
                                    <router-link :to="{name:'editSupplier', params:{supplierId: id} }" class="btn btn-sm btn-info m-1">Edit supplier</router-link>
                                    <button class="btn btn-sm btn-danger ml-1" @click="deleteSupplier(id)">Delete supplier</button>
                                    <hr />
                                    <router-link :to="{name:'suppliersMap', params:{suppLatitude: latitude, suppLongitude: longitude} }"  class="btn btn-sm btn-outline-secondary m-1">Show on map</router-link>
                                </div>
                            </transition>
                            <button class="btn btn-secondary btn-sm" v-on:click="isHidden = !isHidden"><span v-if="isHidden">Show</span><span v-if="!isHidden">Hide</span> details</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        props: {
            id: String,
            name: String,
            latitude: String,
            longitude:String,
            status: Boolean,
            checkedAt: String,
        },
        data: function () {
            return {
                isHidden: true,
                isDeleted: false
            }
        },
        methods: {
            deleteSupplier(supplierId) {
                let vm = this;
                axios.delete('https://api-suppliers.herokuapp.com/api/suppliers/' + supplierId, {
                    params: {
                        id: supplierId
                    }
                })
                    .then(function () {
                        vm.isDeleted = true;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    .green {
        color: #42b983;
    }

    .red {
        color: darkred;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }


    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .fade-enter-active {
        transition: all .3s ease;
    }

    .fade-leave-active {
        transition: all .3s ease;
    }

    .fade-enter, .fade-leave-to
        /* .fade-leave-active below version 2.1.8 */
    {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>
