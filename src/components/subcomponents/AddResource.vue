<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add Resource</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>Resource Name</p></Label>
                <input class="inputbox" type="text" v-model="resource.name">
            </div>
            <div class="input">
                <label><p>Resource Description</p></label>
                <input class="inputbox" type="text" v-model="resource.description">
            </div>
            <div class="input">
                <label><p>Location</p></label>
                <select label="City" v-model="resource.city">
                    <option  v-for="city in this.cities" v-bind:key="city.id" v-bind:value="city.id">{{city.name}}</option>
                </select>
            </div>
            <div class="input">
                <label><p>Finite resource?</p></label>
                <input class="inputbox" type="checkbox" v-model="resource.isfiniteresource">
            </div>
            <div class="input" v-if="resource.isfiniteresource">
                <label><p>Resource amount</p></label>
                <input class="inputbox" type="number" steps="0.01" v-model="resource.resourceamount">
            </div>
            <div class="input">
                <label><p>Resource exploitation modifier</p></label>
                <p>(How easy is is to extract/get to)</p>
                <input class="inputbox" type="number" steps="0.01" v-model="resource.resourceexploitationmodifier">
            </div>
            <div class="input">
                <label><p>Type of ware when exploited</p></label>
                <select label="Ware" :options="this.wares" v-model="resource.warewhenexploited">
                    <option  v-for="ware in this.wares" v-bind:key="ware.id" v-bind:value="ware.id">{{ware.name}}</option>
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
    name: "AddResource",
    data() {
        return {
            resource: {
                name: "",
                id: "",
                city: "",
                description: "",
                producedgood: "",
                isfiniteresource: false,
                resourceamount: 0,
                isbeingexploited: false,
                warewhenexploited: "",
                resourceexploitationmodifier: 1
            },
            citiesanddivisions: [],
            cities: [],
            wares: [],
            errormessage: ""
        }
    },
    
    created: function(){
        this.wares = backMain.getData().wares
        this.citiesanddivisions = backMain.getData().citiesanddivisions
        for(let i = 0; i<this.citiesanddivisions.length; i++){
            if(this.citiesanddivisions[i].iscity){ 
                this.cities.push(this.citiesanddivisions[i])
            }
        }
    },
    methods: {
        submit: function() {
            this.errormessage=""
            if(this.resource.name===""){
                this.errormessage="You must add a name to the resource!"
                return;
            }
            if(this.resource.city===""){
                this.errormessage="You must add a location to the resource!"
                return;
            }
            if(this.resource.warewhenexploited===""){
                this.errormessage="You must add a ware to the resource!"
                return;
            }
            let tmp = backMain.getData();
            this.resource.id = shortid.generate()
            this.resource.price = parseFloat(this.resource.price)
            this.resource.productionperworker = parseFloat(this.resource.productionperworker)
            this.resource.resourceamount = parseFloat(this.resource.resourceamount)
            this.resource.maxworkers = parseInt(this.resource.maxworkers)
            tmp.resources.push(clonedeep(this.resource));
            backMain.setData(clonedeep(tmp));
            this.resource = {
                name: "",
                id: "",
                city: "",
                description: "",
                producedgood: "",
                isfiniteresource: false,
                resourceamount: 0,
                isbeingexploited: false,
                warewhenexploited: "",
                resourceexploitationmodifier: 1
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
    padding-left: 5em;
    margin: auto;
}
.inputfields {
    display: inline-block;
}
.inputbox{
    margin-bottom: 2em;
}
</style>
