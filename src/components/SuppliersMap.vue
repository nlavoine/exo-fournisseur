<template>
    <div class="container">
        <h1>Carte des fournisseurs</h1>
        <<gmap-map
            :center="{lat:48.864716, lng:2.349014}"
            :zoom="7"
            style="width: 100%; height: 800px"
    >
    </gmap-map>
    </div>
</template>

<script>

    export default {
        name: "SuppliersMap.vue"
    }
</script>

<style scoped>

</style>