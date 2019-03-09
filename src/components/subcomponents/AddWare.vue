<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add Ware</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Name</p></Label>
                <input type="text" v-model="ware.name">
            </div>
            <div class="input">
                <Label><p>Ware description</p></Label>
                <input type="text" v-model="ware.description">
            </div>
            <div class="input">
                <Label><p>Measure unit used</p></Label>
                <select v-model="ware.unit">
                    <option v-for="unit in this.units" v-bind:key="unit">{{unit}}</option>
                </select>
            </div>
            <div class="input">
                <Label><p>Is a buildingmaterial</p></Label>
                <input type="checkbox" v-model="ware.buildingmaterial">
            </div>
            <div class="input">
                <Label><p>Price per unit</p></Label>
                <input type="number" v-model="ware.price" step="0.01">
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
    name: "AddWare",
    data() {
        return {
            ware: {
                id : "",
                name : "",
                description: "",
                price : 0,
                unit: "",
                amountowned: 0,
                buildingmaterial: false
            },
            units: [],
            errormessage: ""
        }
    },
    created: function() {
        this.units = backMain.getData().units
    },
    methods: {
        submit: function(){
            this.errormessage=""
            if(this.ware.unit===""){
                this.errormessage="You must add a measure unit to the ware!"
                return;
            }
            if(this.ware.name===""){
                this.errormessage="You must add a name to the ware!"
                return;
            }
            let tmp = backMain.getData()
            this.ware.id = shortid.generate()
            this.ware.price = parseFloat(this.ware.price)
            tmp.wares.push(clonedeep(this.ware))
            backMain.setData(clonedeep(tmp))
            this.ware = {
                id : "",
                name : "",
                description: "",
                price : 0,
                unit: "",
                amountowned: 0,
                buildingmaterial: false
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
