<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-5 mt-3">
               <h2>Add a supplier</h2>
                <form id="creatSupp" class="text-left" @submit="checkForm">
                    <div class="form-group mt-2">
                        <label for="suppName">Email address</label>
                        <input type="text" class="form-control" id="suppName" aria-describedby="suppName" placeholder="Enter supplier's name" v-model="suppName">
                    </div>
                    <div class="form-group mt-5">
                        Stock ?
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="suppStatus" id="suppStatus1" v-bind:value="true" :selected="true"  v-model="suppStatus">
                            <label class="form-check-label" for="suppStatus1">
                                True
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="suppStatus" id="suppStatus2" v-bind:value="false" v-model="suppStatus">
                            <label class="form-check-label" for="suppStatus2">
                                false
                            </label>
                        </div>
                    </div>
                    <div class="form-group mt-5">
                        <label for="suppLat">Latitude</label>
                        <input type="text" class="form-control" id="suppLat" aria-describedby="suppLat" placeholder="Enter supplier's latitude" v-model="suppLat">
                    </div>
                    <div class="form-group mt-5">
                        <label for="suppLng">Longitude</label>
                        <input type="text" class="form-control" id="suppLng" aria-describedby="suppLng" placeholder="Enter supplier's longitude" v-model="suppLng">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');


    export default {
        data: function () {
            return {
                errors : [],
                suppId : null,
                suppName : null,
                suppStatus : null,
                suppLat : null,
                suppLng : null
            }
        },
        methods:{
            checkForm(e){
                this.errors = [];
                console.log("error start " + this.errors);

                if(!this.suppName){
                    this.errors.push("Please set a supplier name.")
                }
                if(!this.suppLat){
                    this.errors.push("Please set a supplier latitude.")
                }
                if(!this.suppLng){
                    this.errors.push("Please set a supplier longitude.")
                }
                e.preventDefault()
                if(this.errors.length<1){
                    this.postSupplier();
                }else{
                    console.log("error end " + this.errors);
                }
            },
            postSupplier(){
                console.log("postSupplier");
                let date = new Date()

                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: this.suppName,
                    checkedAt: date.toISOString(),
                    status: this.suppStatus,
                    latitude: this.suppLat,
                    longitude: this.suppLng
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        }
    }
</script>

<style scoped>

</style>
