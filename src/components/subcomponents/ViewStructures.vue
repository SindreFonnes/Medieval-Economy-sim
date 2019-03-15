<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column structure" v-for="structure in this.structures" v-bind:key="structure.id">
            <b>Name: {{structure.name}}</b>
            <p>Description: {{structure.description}}</p>
            <p>Id : {{structure.id}}</p>
            <p>Design used : {{structuredesigns.find(t => t.id == structure.designused).name}}</p>
            <p>
                <b v-if="structures.underconstruction">Is under construction</b>
            </p>
            <div v-if="structure.underconstruction">
                Time remaining before complete in workhours:
                <b>{{structure.workhoursneeded}}</b>
                <p>Materials needed to complete construction :</p>
                <p v-for="material in structure.materialsneeded" v-bind:key="material.id">
                    {{buildingmaterials.find(t => t.id ==material.id).name}} :<b>{{material.amountneeded}}</b>
                </p>
            </div>
            <p>City it belongs to: {{cities.find(t => t.id==complexes.find(s => s.id == structure.designatedcomplex).location).name}}</p>
            <p>Complex it belongs to: {{complexes.find(s => s.id == structure.designatedcomplex).name}}</p>
            <p>Size : {{structure.size}} cubic meters</p>
            <div v-if="structure.isinhabitable&&!structure.underconstruction">
                <p>Amount of inhabitants: </p>
                <b>{{structure.currentoccupants.length}}/{{structure.maxoccupants}}</b>
            </div>
            
            <button v-on:click="removeentry(structure)">Remove structure</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            structures: [],
            complexes: [],
            structuredesigns: [],
            cities: [],
            buildingmaterials: [],
            wares: []
        }
    },
    created: function() {
        let tmp = backMain.getData()
        this.structures = tmp.structures
        this.wares = tmp.wares
        this.complexes = tmp.complexes
        this.structuredesigns = tmp.structuredesigns
        for(let i = 0; i<tmp.citiesanddivisions.length; i++){
            if(tmp.citiesanddivisions[i].iscity){ 
                this.cities.push(tmp.citiesanddivisions[i])
            }
        }
        for(let i = 0; i<tmp.wares.length; i++){
            if(tmp.wares[i].buildingmaterial) {
                this.buildingmaterials.push(tmp.wares[i])
            }
        }
    },
    methods: {
        getData: function(){
            this.structures = backMain.getData().structures
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.structures = tmp.structures.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.structures = []
            this.getData();
        }
    }
}
</script>

<style>
.structure{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

