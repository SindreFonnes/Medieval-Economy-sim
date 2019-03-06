<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column cityordivision" v-for="cityordivision in this.citiesanddivisions" v-bind:key="cityordivision.id">

            <b>Name: {{cityordivision.name}}</b>
            <p>Is a <b v-if="cityordivision.isCity">City</b><b v-if="!cityordivision.isCity">Division</b></p>
            <!-- Add strutures -->
            <button v-on:click="removeentry(cityordivision)">Remove <b v-if="cityordivision.isCity">City</b><b v-if="!cityordivision.isCity">Division</b></button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            citiesanddivisions: []
        }
    },
    mounted: function() {
        this.citiesanddivisions = backMain.getData().citiesanddivisions
    },
    methods: {
        getData: function(){
            this.citiesanddivisions = backMain.getData().citiesanddivisions
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.citiesanddivisions = tmp.citiesanddivisions.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.citiesanddivisions = []
            this.getData();
        }
    }
}
</script>

<style>
.cityordivision{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

