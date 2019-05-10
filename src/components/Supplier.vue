<template>
    <div>
        <!--<transition name="fade">
            <div class="alert alert-success" role="alert" v-show="isDeleted">Supplier deleted successfully</div>
        </transition>-->

        <transition name="slide-fade">
            <div v-show="!isDeleted">
                <div class="hello">
                    <!--<h5>Fournisseur : {{ name }}</h5>-->
                    <div class="card" style="width: 20rem; margin: 0 auto">
                        <div class="card-body">
                            <h5 class="card-text">{{ name }}</h5>
                            <button class="btn btn-primary btn-sm" v-on:click="isHidden = !isHidden"><span v-if="isHidden">Afficher les détails</span><span v-if="!isHidden">Masquer les détails</span></button>
                            <transition name="fade">
                                <div v-show="!isHidden" class="mt-3">
                                    <h5 :class="{ green: status, red:!status }">A du stock ? <span v-if="status">OK</span><span v-else>KO</span></h5>
                                    <p>Date de dernier relevé des stocks : {{ checkedAt }}</p>
                                    <button class="btn btn-sm btn-warning mr-1">Edit supplier</button>
                                    <button class="btn btn-sm btn-danger ml-1" @click="deleteSupplier(id)">Delete supplier</button>
                                </div>
                            </transition>
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
