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
                    <option v-for="city in getCities" v-bind:key="city.id" v-bind:value="city.id">{{city.name}}</option>
                </select>
            </div>
        </div>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
import shortid from 'shortid';
import {mapGetters, mapMutations} from 'vuex'

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
        }
    },
    computed: {
        ...mapGetters([
            'getCities'
        ])
    },
    methods: {
        ...mapMutations([
            'ADD_COMPLEX'
        ]),
        submit: function() {
            this.errormessage = ""
            if(this.complex.name===""){
                this.errormessage="You must add a name to the complex!"
                return;
            }
            if(this.complex.location===""){
                this.errormessage="You must add a location to the complex!"
                return;
            }
            this.complex.id = shortid.generate();
            this.ADD_COMPLEX(this.complex)
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