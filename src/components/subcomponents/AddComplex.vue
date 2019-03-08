<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add complex</b></label>
        <div class="fields">
            <div class="input">
                <Label><p>complex Name</p></Label>
                <input class="inputbox" type="text" v-model="complex.name">
            </div>
            <div class="input">
                <label><p>complex Description</p></label>
                <input class="inputbox" type="text" v-model="complex.description">
            </div>
            <div class="input">
                <label><p>complex Revenue/Upkeep (in copper per day)</p></label>
                <input class="inputbox" type="number" steps="0.01" v-model="complex.revenueorupkeep">
            </div>
            <div class="input">
                <label><p>Complex location</p></label>
                <select label="City or Division" v-model="citizen.cityordivision">
                    <option v-for="cityordivision in data.citiesanddivisions" v-bind:key="cityordivision.id">{{cityordivision.name}}</option>
                </select>
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
    name: "Addcomplex",
    data() {
        return {
            complex: {
                name: "",
                id: "",
                description: "",
                revenueorupkeep: 0
            },
            errormessage: ""
        }
    },
    methods: {
        submit: function() {
            if(this.complex.name===""){
                this.errormessage="You must add a name to the complex"
                return;
            }
            let tmp = backMain.getData();
            this.complex.id = shortid.generate();
            this.complex.revenueorupkeep = parseFloat(this.complex.revenueorupkeep);
            tmp.complexs.push(clonedeep(this.complex));
            backMain.setData(clonedeep(tmp));
            this.complex.name = ""
            this.complex.id = ""
            this.complex.description = ""
            this.complex.revenueorupkeep = 0
        }
    }
}
</script>

<style scoped>
.initinput {
    margin:auto;
}
.input {
    margin: auto;
}
.inputfields {
    display: inline-block;
}
.inputbox{
    margin-bottom: 2em;
}
</style>
