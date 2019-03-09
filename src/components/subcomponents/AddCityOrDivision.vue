<template>
<!-- Reformate to include a dropdown for either city or divison so that you can have pops indipendent of cities -->
    <div class="field inputfields">
        <label><b>{{errormessage}}</b></label>
        <label><b>Add City or Division</b></label>
        <div class="fields">
            <div class="initinput">
                <Label><p>City/Division Name</p></Label>
                <input type="text" v-model="cityordivision.name">
            </div>
            <div class="input">
                <Label><p>Is a City(if false, it's a division)</p></Label>
                <input type="checkbox" v-model="cityordivision.iscity">
            </div>
        </div>
        <button v-on:click="submit"> Submit </button>
    </div>
</template>

<script>
import backMain from "./../../backend/BackMain.js"
import clonedeep from 'lodash.clonedeep'
import shortid from 'shortid'

export default {
    name: "AddCity",
    data() {
        return {
            cityordivision: {
                id: "",
                name: "",
                iscity: true,
                complexes:[]
            },
            errormessage: ""
        }
    },
    methods: {
        submit: function(){
            this.errormessage="";
            if(this.cityordivision.name===""){
                this.errormessage="You must add a name to the city/division!"
                return;
            }
            let tmp = backMain.getData();
            for(let i = 0; i<tmp.citiesanddivisions.length; i++){
                if(tmp.citiesanddivisions[i].name==this.cityordivision.name){
                    this.errormessage ="There already exists a city or division with that name. Pick another name";
                    return;
                }
            }
            this.cityordivision.id = shortid.generate();
            tmp.citiesanddivisions.push(clonedeep(this.cityordivision));
            backMain.setData(clonedeep(tmp));
            this.cityordivision = {
                id: "",
                name: "",
                iscity: true,
                complexes:[]
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
