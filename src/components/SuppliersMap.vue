<template>
    <div class="container">
        <h1>Carte des fournisseurs</h1>
        <gmap-map
                :center="{lat:currPosition.latitude, lng:currPosition.longitude}"
            :zoom="7"
            style="width: 100%; height: 800px"
        >
        <GmapMarker
                :key="index"
                v-for="(m, index) in suppliersList.myDatas"
                :position="{lat:parseFloat(m.latitude), lng:parseFloat(m.longitude)}"
                :title="m.name"
                :clickable="true"
                :draggable="false" @click="center={lat:parseFloat(m.latitude), lng:parseFloat(m.longitude)}"/>
    </gmap-map>
    </div>
</template>

<script>



    export default {
        name: "SuppliersMap.vue",

        data: function () {
            return {
                currPosition :{
                    latitude : 0,
                    longitude : 0
                },
                suppliersList: {
                    myDatas: []
                }
            }
        },

        beforeCreate: function() {

        },
        created: async function () {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {
                    this.currPosition = position.coords;
                })
            }
            this.$root.axiosCall(true, this.suppliersList)
        },
    }
</script>

<style scoped>

</style>