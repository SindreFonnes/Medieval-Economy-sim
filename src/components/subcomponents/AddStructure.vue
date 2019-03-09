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
                <Label><p>Structure estimated value</p></Label>
                <input type="number" step="0.01" v-model="structure.value">
            </div>
            <div class="input">
                <Label><p>Structure ground covered in meters</p></Label>
                <p>Length :</p><input type="number" step="0.01" v-model="structure.groundcovered.x">
                <p>Width :</p><input type="number" step="0.01" v-model="structure.groundcovered.y">
            </div>
            <div class="input">
                <Label><p>Structure space used</p></Label>
                <input type="number" step="0.01" v-model="structure.spaceused">
            </div>
            <div class="input">
                <Label><p>Complex it belongs to</p></Label>
                <select v-model="structure.designatedcomplex">
                    <option v-for="complex in this.complexes" v-bind:key="complex.id">{{complex.name}}</option>
                </select>
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
import backMain from "./../../backend/BackMain.js"
import shortid from 'shortid';
import clonedeep from 'lodash.clonedeep'

export default {
    name: "Addstructure",
    data() {
        return {
            structure: {
                id : "",
                name : "",
                description: "",
                owner: "",
                designatedcomplex: "",
                value: 0,
                goundcovered: {
                    x: 0,
                    y: 0
                },
                spaceused: 0,
                isinhabitable: false,
                maxoccupants: 0,
                currentoccupants: []
            },
            complexes: [],
            errormessage: ""
        }
    },
    created: function() {
        this.complexes = backMain.getData().complexes
    },
    methods: {
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
            let tmp = backMain.getData()
            this.structure.id = shortid.generate()
            this.structure.price = parseFloat(this.structure.price)
            tmp.structures.push(clonedeep(this.structure))
            backMain.setData(clonedeep(tmp))
            this.structure = {
                id : "",
                name : "",
                description: "",
                owner: "",
                designatedcomplex: "",
                value: 0,
                goundcovered: {
                    x: 0,
                    y: 0
                },
                spaceused: 0,
                isinhabitable: false,
                maxoccupants: 0,
                currentoccupants: []
            }
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
