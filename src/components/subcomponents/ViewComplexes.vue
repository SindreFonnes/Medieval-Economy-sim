<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column task" v-for="complex in complexes" v-bind:key="complex.id">
           
            <b>Name: {{complex.name}}</b>
            <p><b>Description: </b></p>
            <p>{{complex.description}}</p>
            <b>Location:</b>
            <div>{{cities.find(t => t.id == complex.location).name}}</div>
            <button v-on:click="removeentry(complex)">Remove complex</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            complexes: [],
            cities: []
        }
    },
    created: function() {
        this.complexes = backMain.getData().complexes
        let tmp = backMain.getData()
        this.resources = tmp.resources
        this.wares = tmp.wares
        for(let i = 0; i<tmp.citiesanddivisions.length; i++){
            if(tmp.citiesanddivisions[i].iscity){ 
                this.cities.push(tmp.citiesanddivisions[i])
            }
        }
    },
    methods: {
        getData: function(){
            this.complexes = backMain.getData().complexes
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.complexes = tmp.complexes.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.complexes = []
            this.getData();
        }
    }
}
</script>

<style>
.task{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>
