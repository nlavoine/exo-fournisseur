<template>
    <div class="hello">
        <h1>Fournisseur : {{ name }}</h1>
        <h3 :class="{ green: status, red:!status }">A du stock ? <span v-if="status">OK</span><span v-else>KO</span></h3>
        <h5>Date de dernier relevé des stocks : {{ checkedAt  }}</h5>
    </div>
</template>

<script>
    //var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"2-digit", minute:"2-digit"};
    //var date = new Date()

    export default {
        props:{
            id : Number,
            name : String,
            status : Boolean,
            checkedAt:String
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
</style>
