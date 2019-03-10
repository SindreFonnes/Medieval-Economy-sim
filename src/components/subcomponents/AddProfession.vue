<template>
    <div class="field inputfields">
        <p><b>{{errormessage}}</b></p>
        <label><b>Add Profession</b></label>
        <div class="fields">
            <div class="input">
                <Label><p>Profession Name</p></Label>
                <input class="inputbox" type="text" v-model="profession.name">
            </div>
            <div class="input">
                <label><p>Profession Description</p></label>
                <input class="inputbox" type="text" v-model="profession.description">
            </div>
            <div class="input">
                <label><p>Profession Revenue/Upkeep (in copper per day)</p></label>
                <input class="inputbox" type="number" steps="0.01" v-model="profession.revenueorupkeep">
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
    name: "AddProfession",
    data() {
        return {
            profession: {
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
            if(this.profession.name===""){
                this.errormessage="You must add a name to the profession"
                return;
            }
            let tmp = backMain.getData();
            this.profession.id = shortid.generate();
            this.profession.revenueorupkeep = parseFloat(this.profession.revenueorupkeep);
            tmp.professions.push(clonedeep(this.profession));
            backMain.setData(clonedeep(tmp));
            this.profession= {
                name: "",
                id: "",
                description: "",
                revenueorupkeep: 0
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
