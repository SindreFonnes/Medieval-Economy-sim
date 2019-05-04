<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column wares" v-for="ware in getWares" v-bind:key="ware.id">
            <b>Name: {{ware.name}}</b>
            <p>Description: {{ware.description}}</p>
            <p>Amount owned: {{ware.amountowned}}</p>
            <p>How much to sell <input v-model="ware.amountowned"/></p>
            <button v-on:click="updatewareamount(ware)">Update amount</button>
            <p></p>
            <p>Measured in: {{ware.unit}}</p>
            <p>Price : {{ware.price}}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getWares'
        ])
    },
    methods: {
        ...mapMutations([
            'CHANGE_WARE_AMOUNT'
        ]),
        updatewareamount: function(data){
            this.CHANGE_WARE_AMOUNT(data)
        }
    }
}
</script>

<style>
.wares{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

