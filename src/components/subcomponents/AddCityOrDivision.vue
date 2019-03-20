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
import shortid from 'shortid'
import {mapMutations} from 'vuex'

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
        ...mapMutations([
            'ADD_CITY_OR_DIVISION'
        ]),
        submit: function(){
            this.errormessage="";
            if(this.cityordivision.name===""){
                this.errormessage="You must add a name to the city/division!"
                return;
            }
            this.cityordivision.id = shortid.generate();
            this.ADD_CITY_OR_DIVISION(this.cityordivision)
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
