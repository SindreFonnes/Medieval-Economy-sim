<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column wares" v-for="ware in wares" v-bind:key="ware.id">
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
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            
        }
    },
    computed: {
        wares : function() {
            return backMain.getData().wares
        }
    },
    methods: {
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.wares = tmp.wares.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.resources = []
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

