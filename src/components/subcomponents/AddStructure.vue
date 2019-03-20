<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add structure</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Name</p></Label>
                <input type="text" v-model="structure.name">
            </div>
            <div class="input">
                <Label><p>Structure description</p></Label>
                <input type="text" v-model="structure.description">
            </div>
            <div class="input">
                <label><p>Design used</p></label>
                <select v-model="structure.designused">
                    <option v-for="structuredesign in getStructureDesigns" v-bind:key="structuredesign.id" v-bind:value="structuredesign.id">{{structuredesign.name}}</option>
                </select>
            </div>
            <div class="input">
                <Label><p>Structure ground covered in meters</p></Label>
                <p>Length :</p><input type="number" step="0.01" v-model="structure.groundcovered.x">
                <p>Width :</p><input type="number" step="0.01" v-model="structure.groundcovered.y">
                <p>Height :</p><input type="number" step="0.01" v-model="structure.groundcovered.z">
            </div>
            <div class="input">
                <Label><p>Average Solid vs Space ratio</p></Label>
                <input type="range" min="1" max="100" v-model="structure.spaceused">
                <p><input type="number" v-model="structure.spaceused" min="1" max="100"></p>
            </div>
            <div class="input">
                <label><p>Location</p></label>
                <select v-model="selectedcity">
                    <option v-for="city in getCities" v-bind:key="city.id" v-bind:value="city">{{city.name}}</option>
                </select>
            </div>
            <div class="input" v-if="selectedcity!=''">
                <Label><p>Complex it belongs to</p></Label>
                <select v-model="structure.designatedcomplex">
                    <option v-for="complex in selectedcity.complexes" v-bind:key="complex.id" v-bind:value="complex.id">{{complex.name}}</option>
                </select>
            </div>
            <div class="input">
                <label><p>Needs to be constructed</p></label>
                <input type="checkbox" v-model="structure.underconstruction">
            </div>
            <div class="input">
                <Label><p>Is habitable</p></Label>
                <input type="checkbox" v-model="structure.isinhabitable">
            </div>
            <div class="input" v-if="structure.isinhabitable">
                <Label><p>Max occupants</p></Label>
                <input type="number" steps="1" v-model="structure.maxoccupants">
            </div>
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import shortid from 'shortid';
import { mapGetters, mapMutations } from 'vuex';
import clonedeep from 'lodash.clonedeep'

export default {
    name: "Addstructure",
    data() {
        return {
            structure: {
                id : "",
                name : "",
                designused: "",
                description: "",
                owner: "",
                designatedcomplex: "",
                groundcovered: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                size: 0,
                spaceused: 100,
                materialsneeded: [],
                isinhabitable: false,
                maxoccupants: 0,
                currentoccupants: [],
                workhoursneeded: 0,
                underconstruction: true
            },
            errormessage: "",
            selectedcity: ""
        }
    },
    computed:  {
        ...mapGetters([
            'getCities',
            'getStructureDesigns'
        ])
    },
    methods: {
        ...mapMutations([
            'ADD_STRUCTURE'
        ]),
        submit: function(){
            this.errormessage=""
            if(this.structure.unit===""){
                this.errormessage="You must add a measure unit to the structure!"
                return;
            }
            if(this.structure.name===""){
                this.errormessage="You must add a name to the structure!"
                return;
            }
            if(this.structure.designused===""){
                this.errormessage="You must add a design to the structure!"
                return;
            }
            if(this.structure.designatedcomplex===""){
                this.errormessage="You must add a complex to the structure!"
                return;
            }
            if(this.structure.groundcovered.x===0){
                this.errormessage="You must add a length to the structure!"
                return;
            }
            if(this.structure.groundcovered.y===0){
                this.errormessage="You must add a width to the structure!"
                return;
            }
            if(this.structure.groundcovered.z===0){
                this.errormessage="You must add a height to the structure!"
                return;
            }
            this.structure.id = shortid.generate()
            this.structure.groundcovered.x = parseFloat(this.structure.groundcovered.x)
            this.structure.groundcovered.y = parseFloat(this.structure.groundcovered.y)
            this.structure.groundcovered.z = parseFloat(this.structure.groundcovered.z)
            this.structure.spaceused = parseFloat(this.structure.spaceused)/100
            this.structure.materialsneeded = clonedeep(this.getStructureDesigns.find(t => t.id == this.structure.designused).buildingmaterials)
            this.structure.size = this.structure.groundcovered.x*this.structure.groundcovered.y*this.structure.groundcovered.z
            for(let i = 0; i<this.structure.materialsneeded.length; i++){
                this.structure.materialsneeded[i].amountneeded = this.structure.materialsneeded[i].amountneeded*this.structure.size*this.structure.spaceused
            }
            this.structure.workhoursneeded =  this.structure.size*this.structure.spaceused*this.getStructureDesigns.find(t => t.id == this.structure.designused).timepercubicmeter
            this.ADD_STRUCTURE(this.structure)
            this.structure = {
                id : "",
                name : "",
                designused: "",
                description: "",
                owner: "",
                designatedcomplex: "",
                groundcovered: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                size: 0,
                spaceused: 100,
                materialsneeded: [],
                isinhabitable: false,
                maxoccupants: 0,
                currentoccupants: [],
                workhoursneeded: 0,
                underconstruction: true
            }
            this.selectedcity= ""
        }
    }
}
</script>

<style scoped>
.input {
    padding-left: 5em;
}
.inputfields {
    display: inline-block;
}
</style>
