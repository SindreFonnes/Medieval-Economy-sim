<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add Citizen</b></label>
        <div class="fields">
            <div class="initinput">
                <label><p>Random Age</p></label>
                <input type="checkbox" v-model="randomage">
            </div>
            <div class="input" v-if="randomage">
                <label><p>Age range</p></label>
                <p> Max <input type="number" steps="1" v-model="max"></p>
                <p> Min <input type="number" steps="1" v-model="min"></p>
            </div>
            <div class="input" v-if="!randomage">
                <Label><p>Age</p></Label>
                <input type="number" steps="0.01" v-model="citizen.age">
                <!-- and birthdate?, An autochecked autogenerate, or uncheck to specify possibly? -->
            </div>
            <div class="input">
                <label><p>Autogenerate Name</p></label>
                <input type="checkbox" v-model="autogeneratename">
            </div>
            <div class="input" v-if="!autogeneratename">
                <label><p>Name</p></label>
                <input type="text" v-model="citizen.name">
                <!-- Autogenerate autochecked, but can uncheck and manualy name
                Autogenerated name generates a surname based on the father feks "Olavsson" eller "Fredriksson"
                or for english, use a english surname list and select some -->
            </div>
            <div class="input" v-if="!autogeneratename">
                <label><p>Surname</p></label>
                <input type="text" v-model="citizen.surname">
            </div>
            <div class="input">
                <label><p>Home city/ unit assignment</p></label>
                <select label="City or Division" v-model="citizen.cityordivision">
                    <option v-for="cityordivision in getCitiesAndDivisions" v-bind:key="cityordivision.id" v-bind:value="cityordivision.id">{{cityordivision.name}}</option>
                </select>
            </div>
            <div class="input">
                <label><p>Profession</p></label>
                <select label="profession" v-model="citizen.profession">
                    <option v-for="profession in getProfessions" v-bind:key="profession.id" v-bind:value="profession.id">{{profession.name}}</option>
                </select>
                <!-- Dropdown with professions -->
            </div>
            <div class="input">
                <label><p>Availability for new tasks (unchecked means not available)</p></label>
                <input class="inputbox" type="checkbox" v-model="citizen.available">
            </div>
            <!-- Add homeselection, defaults to 'nohome' -->
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import shortid from 'shortid';
import randomname from 'random-name'
import {mapMutations, mapGetters} from 'vuex'

export default {
    name: "AddCitizen",
    data() {
        return {
            citizen: {
                id : "",
                age : 0,
                name: "",
                surname: "",
                cityordivision: "",
                profession: "",
                task: "",
                available: false
            },
            randomage: true,
            autogeneratename: true,
            errormessage: "",
            max : 40,
            min : 15,
        }
    },
    computed: {
        ...mapGetters([
            'getProfessions',
            'getCitiesAndDivisions'
        ])
    },
    methods: {
        ...mapMutations([
            'ADD_CITIZEN'
        ]),
        submit: function(){
            this.errormessage=""
            if(this.autogeneratename){
                this.citizen.name = randomname.first()
                this.citizen.surname = randomname.last()
            } else if(this.citizen.name===""){
                this.errormessage="You must add a name to the citizen!"
                return;
            }
            if(this.citizen.cityordivision===""){
                this.errormessage="You must add a Home city/division to the citizen!"
                return;
            }
            if(this.citizen.profession===""){
                this.errormessage="You must add a profession to the citizen!"
                return;
            }
            if(this.randomage){
                this.max = parseFloat(this.max)
                this.min = parseFloat(this.min)
                this.citizen.age = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;
            }
            this.citizen.id = shortid.generate()
            this.citizen.age = parseFloat(this.citizen.age)
            this.ADD_CITIZEN(this.citizen)
            this.citizen = {
                id : "",
                age : 0,
                name: "",
                surname: "",
                cityordivision: this.citizen.cityordivision,
                profession: this.citizen.profession,
                task: "",
                available: this.citizen.available
            }
            this.autogeneratename = true
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
