<template>
    <div class="container">
        <h1>Carte des fournisseurs</h1>
        <gmap-map
            :center="{lat:10, lng:10}"
            :zoom="7"
            style="width: 100%; height: 800px"
        >
        <GmapMarker
                :key="index"
                v-for="(m, index) in Suppliers"
                :position="{lat:m.latitude, lng:m.longitude}"
                :title="m.title"
                :clickable="true"
                :draggable="true" @click="center={lat:m.latitude, lng:m.longitude}"/>
    </gmap-map>
    </div>
</template>

<script>

    export default {
        name: "SuppliersMap.vue",
        data: function () {
            return {
                Suppliers: [
                    {
                        id: 1,
                        title:"fournisseur 1",
                        latitude: 10,
                        longitude: 10
                    },
                    {
                        id: 2,
                        title:"fournisseur 2",
                        latitude: 11,
                        longitude: 9.6
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>