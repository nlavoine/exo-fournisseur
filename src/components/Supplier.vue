<template>
    <div class="hello">
        <!--<h5>Fournisseur : {{ name }}</h5>-->
        <button class="btn btn-primary btn-sm" v-on:click="isHidden = !isHidden"><span v-if="isHidden">Afficher les détails</span><span v-if="!isHidden">Masquer les détails</span></button>
        <div v-show="!isHidden" class="mt-3">
            <h5 :class="{ green: status, red:!status }">A du stock ? <span v-if="status">OK</span><span v-else>KO</span></h5>
            <p>Date de dernier relevé des stocks : {{ checkedAt }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            id: String,
            name: String,
            status: Boolean,
            checkedAt: String,

        },
        data: function () {
            return {
                isHidden: true
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
</style>
