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
                <label><p>Complex location</p></label>
                <select label="City or Division" v-model="complex.location">
                    <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{city.name}}</option>
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
                location: "",
                structures: []
            },
            errormessage: "",
            cities: []
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
        submit: function() {
            if(this.complex.name===""){
                this.errormessage="You must add a name to the complex!"
                return;
            }
            if(this.complex.location===""){
                this.errormessage="You must add a location to the complex!"
                return;
            }
            let tmp = backMain.getData();
            this.complex.id = shortid.generate();
            tmp.citiesanddivisions.find(t => t.id == this.complex.location).complexes.push(clonedeep(this.complex));
            tmp.complexes.push(clonedeep(this.complex));
            backMain.setData(clonedeep(tmp));
            this.complex = {
                name: "",
                id: "",
                description: "",
                location: "",
                structures: []
            }
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