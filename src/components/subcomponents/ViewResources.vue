<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column resource" v-for="resource in this.resources" v-bind:key="resource.id">
            <b>Name: {{resource.name}}</b>
            <p>
                <b v-if="resources.isbeingexploited">Is being exploited</b>
                <b v-if="!resources.isbeingexploited">Currently not exploited</b>
            </p>
            <p v-if="resource.isfiniteresource">
                <b>Amount left : {{resource.resourceamount}}</b>
            </p>
            <p>City it belongs to: {{cities.find(t => t.id==resource.city).name}}</p>
            <p>Ware generated: {{wares.find(t => t.id==resource.warewhenexploited).name}}</p>
            <p>Description: {{resource.description}}</p>
            <p>Id : {{resource.id}}</p>
            <button v-on:click="removeentry(resource)">Remove resource</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            resources: [],
            cities: [],
            wares: []
        }
    },
    created: function() {
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
            this.resources = backMain.getData().resources
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.resources = tmp.resources.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.resources = []
            this.getData();
        }
    }
}
</script>

<style>
.resource{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

