<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column wares" v-for="ware in getWares" v-bind:key="ware.id">
            <b>Name: {{ware.name}}</b>
            <p>Description: {{ware.description}}</p>
            <p>Amount owned: {{ware.amountowned}}</p>
            <p>Measured in: {{ware.unit}}</p>
            <p>Price : {{ware.price}}</p>
            <button v-on:click="removeentry(ware)">Remove ware</button>
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
            'REMOVE_WARE'
        ]),
        removeentry: function(data){
            this.REMOVE_WARE(data)
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

