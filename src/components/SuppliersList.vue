<template>
    <div class="container"><h1>Liste des fournisseurs</h1>
        <ul class="list-unstyled ">
            <li v-for="item in Suppliers" v-bind:key="item.id" class="mb-2">
                <div class="card" style="width: 18rem; margin: 0 auto">
                    <div class="card-body">
                        <p class="card-text">{{ item.name }}</p>
                        <router-link  :to="{name:'supplier', params: {id:item.id, name:item.name, status:item.status, checkedAt:item.checkedAt} }" class="btn btn-primary">{{ item.name }}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    //import Supplier from '@/components/Supplier'

    var options = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"2-digit", minute:"2-digit"};
    var date = new Date()

    export default {
        name: "SuppliersList.vue",
        data: function () {
            return {
                Suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: date.toLocaleString("fr-FR", options)
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: date.toLocaleString("fr-FR", options)
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>