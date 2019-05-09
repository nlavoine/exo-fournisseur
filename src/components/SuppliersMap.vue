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
                v-for="(m, index) in $Suppliers"
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
        props:{
            //DataSuppliersList : Array,
            axiosCall: Function
        },
        data: function () {
            return {
                Suppliers: [],
                currPosition : null

            }
        },

        mounted: function() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {
                    this.currPosition = position.coords;
                })
            }
        }
    }
</script>

<style scoped>

</style>