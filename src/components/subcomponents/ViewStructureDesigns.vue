<template>
    <div class="ui four column doubling stackable grid container">
        <div class="column structuredesigns" v-for="structuredesign in this.structuredesigns" v-bind:key="structuredesign.id">
            <b>Name: {{structuredesign.name}}</b>
            <p>Description: {{structuredesign.description}}</p>
            <div v-if="structuredesign.needsmaterials">
                <p>Materials needed per cubic meter</p>
                <p v-for="buildingmaterial in structuredesign.buildingmaterials" v-bind:key="buildingmaterial.id">
                    <b>{{buildingmaterials.find(t => t.id ==buildingmaterial.id).name}} : {{buildingmaterial.amountneeded}}</b>
                </p>
            </div>
            <button v-on:click="removeentry(structuredesign)">Remove structuredesign</button>
        </div>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
export default {
    data() {
        return{
            structuredesigns: [],
            buildingmaterials:[]
        }
    },
    created: function() {
        this.structuredesigns = backMain.getData().structuredesigns
        let tmp = backMain.getData().wares
        for(let i = 0; i<tmp.length; i++){
            if(tmp[i].buildingmaterial) {
                this.buildingmaterials.push(tmp[i])
            }
        }
    },
    methods: {
        getData: function(){
            this.structuredesigns = backMain.getData().structuredesigns
        },
        removeentry: function(data){
            let tmp = backMain.getData()

            tmp.structuredesigns = tmp.structuredesigns.filter(t => t.id != data.id);

            backMain.setData(clonedeep(tmp))
            this.resources = []
            this.getData();
        }
    }
}
</script>

<style>
.structuredesigns{
    border: 0.3em solid black;
    border-radius: 0.5em;
}

.input {
    padding: 0.3em;
}
</style>

